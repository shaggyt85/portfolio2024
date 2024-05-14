export const AdjustForScreenSize = (smallScreen, largeScreen) => {
  return window.innerWidth <= 768 ? smallScreen : largeScreen;
};
