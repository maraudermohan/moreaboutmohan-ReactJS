import { createContext } from 'react';

const ScrollPositionContext = createContext([
  0, // Top scroll position
  0, // Bottom scroll position
]);

export default ScrollPositionContext;
