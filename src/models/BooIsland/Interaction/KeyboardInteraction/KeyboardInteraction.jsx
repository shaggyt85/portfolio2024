import { useEffect } from "react";

export const KeyboardInteraction = ({ onKeyPress, onKeyRelease }) => {
  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);
    window.addEventListener("keyup", onKeyRelease);
    return () => {
      window.removeEventListener("keydown", onKeyPress);
      window.removeEventListener("keyup", onKeyRelease);
    };
  }, [onKeyPress, onKeyRelease]);

  return null;
};
