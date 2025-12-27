import React, { useEffect } from 'react';
import Header from 'components/Header';
import Gallery from 'reactProjects/InfiniteScroll/components/gallery';

import 'reactProjects/InfiniteScroll/styles/style.css';

function InfiniteScroll() {
  const firstImage = 1;
  const gallery = Gallery(firstImage);

  useEffect(() => {
    const rootElem = document.querySelector('#root');
    rootElem.appendChild(gallery);

    return (() => {
      // Cleanup observer before removing gallery
      if (gallery?.cleanup) {
        gallery.cleanup();
      }
      rootElem?.removeChild(gallery);
    });
  }, []);

  return (
    <Header />
  );
}

export default InfiniteScroll;
