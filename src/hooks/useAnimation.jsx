import { useState } from "react";

export const useAnimation = (initialAnimation) => {
  const [currentAnimation, setCurrentAnimation] = useState(initialAnimation);

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return [currentAnimation, handleFocus, handleBlur, setCurrentAnimation];
};
