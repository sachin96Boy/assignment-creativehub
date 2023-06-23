import React, { useRef, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CanvasComponet from "../components/CanvasComponet";

function DashboardScreen() {
  const canvasRef = useRef<HTMLCanvasElement| null>(null);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    if (canvasRef.current) {
      setCanvasReady(true);
    }
  }, []);

  const handleMoseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas is available before proceeding
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    // Do something with the cursor coordinates
    console.log(`Cursor coordinates: (${x}, ${y})`);
  };

  return (
    <Box className="dash-body" onMouseMove={handleMoseMove}>
      {canvasReady && <CanvasComponet canvasRef={canvasRef} />}
    </Box>
  );
}

export default DashboardScreen;
