export const HandleAnimation = (actions, isRotating) => {
  if (isRotating) {
    actions["Take 001"].play();
  } else {
    actions["Take 001"].stop();
  }
};
