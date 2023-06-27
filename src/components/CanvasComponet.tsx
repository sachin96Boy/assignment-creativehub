import { useEffect } from "react";

interface CanvasComponentProps {
  // Define your props here
  // Example: myProp: string;
  canvasref: React.MutableRefObject<HTMLCanvasElement | null>;
  width: string | number | undefined;
  height: string | number | undefined;
}

function CanvasComponet(props: CanvasComponentProps) {

  useEffect(() => {
    const canvas = props.canvasref.current;
    if (!canvas) return; // Ensure canvas is available before proceeding
    const context = canvas.getContext("2d");
    //Our first draw
    if (!context) return; // Ensure canvas is available before proceeding
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [props.canvasref]);

  if (!props.canvasref) {
    return null; // Render nothing if canvasRef.current is null
  }

  return <canvas ref={props.canvasref} {...props} />;
}

export default CanvasComponet;
