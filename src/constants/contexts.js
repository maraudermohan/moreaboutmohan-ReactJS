import { createContext } from 'react';

const ScrollPositionContext = createContext({
  topScroll: 0, // Top scroll position
  bottomScroll: 0, // Bottom scroll position
  browserWidth: 0, // window.innerWidth
  browserHeight: 0, // window.innerHeight
});

export default ScrollPositionContext;
