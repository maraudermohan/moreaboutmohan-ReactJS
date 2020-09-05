import React, { useEffect } from 'react';
import Header from 'components/Header';
import Gallery from 'reactProjects/InfiniteScroll/components/gallery';

import 'reactProjects/InfiniteScroll/styles/style.css';

const InfiniteScroll = () => {
  const firstImage = 1;
  const gallery = Gallery(firstImage);

  useEffect(() => {
    const rootElem = document.querySelector('#root');
    rootElem.appendChild(gallery);

    return (() => {
      rootElem.removeChild(gallery);
    });
  }, []);

  return (
    <Header />
  );
};

export default InfiniteScroll;
