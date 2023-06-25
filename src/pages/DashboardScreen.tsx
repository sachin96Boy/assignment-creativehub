import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { io } from "socket.io-client";

import CanvasComponet from "../components/CanvasComponet";
import CustomMousePointer from "../components/CustomMousePointer";

function DashboardScreen() {
  const canvasref = useRef<HTMLCanvasElement | null>(null);

  const socket = io(import.meta.env.BACKEND_URL);

  const handleMoseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const canvas = canvasref.current;
    if (!canvas) return; // Ensure canvas is available before proceeding
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    // Do something with the cursor coordinates
    console.log(`Cursor coordinates: (${x}, ${y})`);
    socket.emit('emituserdata', {
      position:{
        x:x,
        y:y
      },
      user: JSON.stringify(localStorage.getItem('User'))
    })
  };

  return (
    <Box className="dash-body" onMouseMove={handleMoseMove}>
      <CustomMousePointer />
      <CanvasComponet
        canvasref={canvasref}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </Box>
  );
}

export default DashboardScreen;
