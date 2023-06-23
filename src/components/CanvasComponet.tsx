import React, { useEffect } from "react";


function CanvasComponet(props: any) {

  useEffect(() => {
    const canvas = props.canvasRef.current;
    const context = canvas.getContext("2d");
    //Our first draw
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [props.canvasRef]);
  
  return <canvas ref={props.canvasRef} {...props} />;
}

export default CanvasComponet;
