export const handleAnimation = (actions, currentAnimation) => {
  Object.values(actions).forEach((action) => action.stop());
  if (actions[currentAnimation]) {
    actions[currentAnimation].play();
  }
};
