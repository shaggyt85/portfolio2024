import { useEffect } from "react";
import { handleAnimation } from "./HandlerAnimation";
export const AnimationHandler = ({ actions, currentAnimation }) => {
  useEffect(
    () => handleAnimation(actions, currentAnimation),
    [actions, currentAnimation]
  );
  return null;
};
