import { createContext } from 'react';

export const calcBreakpoint = (width) => {
  let breakpoint = 0;
  if (width >= 1200) {
    breakpoint = 4; // xl
  } else if (width >= 992) {
    breakpoint = 3; // lg
  } else if (width >= 768) {
    breakpoint = 2; // md
  } else if (width >= 576) {
    breakpoint = 1; // sm
  }
  return breakpoint;
};

export const calcOrientation = (width, height) => {
  let orientation = 'landscape';
  if (width < 1200 && width < height) {
    orientation = 'portrait';
  }
  return orientation;
};

export const BrowserContext = createContext({
  breakpoint: 2,
  orientation: 'landscape',
});

export const ScrollPositionContext = createContext({
  topScroll: 0, // Top scroll position
  bottomScroll: 0, // Bottom scroll position
  startedScrolling: false, // Has the user started to scroll
});
