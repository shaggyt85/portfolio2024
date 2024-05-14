import { useEffect } from "react";
import { HandleAnimation } from "./HandleAnimation";
export const AnimationHandler = ({ actions, isRotating }) => {
  useEffect(() => HandleAnimation(actions, isRotating), [actions, isRotating]);
  return null;
};
