import RowContainer from './row-container';
import Image from './image';

/* eslint-disable no-param-reassign */
/**
 * Function that fetches all images in a given row and
 * sets the src url from data-src.
 */
export const SetImageSrc = function (row) {
  const listOfImgs = row.querySelectorAll('.wildlife-image');

  listOfImgs.forEach((img) => {
    const imgUrl = img.dataset.src;
    if (imgUrl !== null && typeof imgUrl !== 'undefined') {
      img.src = imgUrl;
    }
  });
};

/**
 * Function that renders an empty row container and sets observer.
 */
export const LoadNextRowContainer = function (gallery, observer, startIndex) {
  const row = RowContainer(startIndex);
  observer.observe(row);
  gallery.appendChild(row);
  return row;
};

/**
 * Function that renders an empty row container and sets observer.
 */
export const LoadPreviousRowContainer = function (gallery, observer, prevNode, startIndex) {
  const row = RowContainer(startIndex);
  observer.observe(row);
  gallery.insertBefore(row, prevNode);
  return row;
};

/**
 * Function that renders 6 images in a given row.
 * Verifies that each image is between first and last index.
 */
export const renderImagesInRow = function (node, startIndex) {
  const firstIndex = 1;
  const finalIndex = 48;
  let count = 6;
  let currentIndex = startIndex;

  node.textContent = '';
  while (
    count > 0
    && currentIndex >= firstIndex
    && currentIndex <= finalIndex
  ) {
    if (currentIndex > finalIndex) {
      currentIndex = firstIndex;
    }
    const currentImg = Image(currentIndex);
    node.appendChild(currentImg);
    currentIndex += 1;
    count -= 1;
  }
  node.classList.remove('empty-row');
};
/* eslint-enable no-param-reassign */
