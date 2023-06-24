import React, { useRef} from "react";
import { Box } from "@chakra-ui/react";
import CanvasComponet from "../components/CanvasComponet";

function DashboardScreen() {
  const canvasref = useRef<HTMLCanvasElement | null>(null);
 
  const handleMoseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const canvas = canvasref.current;
    if (!canvas) return; // Ensure canvas is available before proceeding
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    // Do something with the cursor coordinates
    console.log(`Cursor coordinates: (${x}, ${y})`);
  };



  return (
    <Box className="dash-body" onMouseMove={handleMoseMove}>
      {<CanvasComponet canvasref={canvasref} width={window.innerWidth} height={window.innerHeight}/>}
    </Box>
  );
}

export default DashboardScreen;
