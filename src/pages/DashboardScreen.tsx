import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import CanvasComponet from "../components/CanvasComponet";

function DashboardScreen() {
  const canvasRef = useRef(null);

  const handleMoseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const canvas = canvasRef.current;

    if (canvas != null) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      // Do something with the cursor coordinates
      console.log(`Cursor coordinates: (${x}, ${y})`);
    }
    
  };


  return (
    <Box className="dash-body" onMouseMove={handleMoseMove}>
      <CanvasComponet canvasRef={canvasRef} />
    </Box>
  );
}

export default DashboardScreen;
