import Observer from './viewport-observer';
import {
  LoadNextRowContainer,
  renderImagesInRow,
  SetImageSrc,
} from './helper-methods';

/**
 * Gallery for all rows of images
 *
 * Component loads rows of 2 images each,
 * Also each row is added to observer object, which detects if the row enters viewport.
 *
 * @param {Number} firstImage First index of images list
 *
 * @returns {Element} Gallery element
 */
const Gallery = function (firstImage) {
  const observer = Observer();
  const gallery = document.createElement('div');
  gallery.setAttribute('class', 'gallery');

  // Render and Observe the first two rows
  const firstRow = LoadNextRowContainer(gallery, observer, firstImage);
  renderImagesInRow(firstRow, firstImage);
  SetImageSrc(firstRow);

  const secondRow = LoadNextRowContainer(gallery, observer, firstImage + 6);
  renderImagesInRow(secondRow, firstImage + 6);
  SetImageSrc(secondRow);

  return gallery;
};

export default Gallery;
