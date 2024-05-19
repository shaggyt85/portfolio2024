import { useEffect } from "react";

export const PointerInteraction = ({
  gl,
  onPointerDown,
  onPointerUp,
  onPointerMove,
}) => {
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("mousedown", onPointerDown);
    canvas.addEventListener("mouseup", onPointerUp);
    canvas.addEventListener("mousemove", onPointerMove);
    canvas.addEventListener("touchstart", onPointerDown);
    canvas.addEventListener("touchend", onPointerUp);
    canvas.addEventListener("touchmove", onPointerMove);
    return () => {
      canvas.removeEventListener("mousedown", onPointerDown);
      canvas.removeEventListener("mouseup", onPointerUp);
      canvas.removeEventListener("mousemove", onPointerMove);
      canvas.removeEventListener("touchstart", onPointerDown);
      canvas.removeEventListener("touchend", onPointerUp);
      canvas.removeEventListener("touchmove", onPointerMove);
    };
  }, [gl, onPointerDown, onPointerUp, onPointerMove]);

  return null;
};
