import {
  LoadNextRowContainer,
  LoadPreviousRowContainer,
  SetImageSrc,
  renderImagesInRow,
} from './helper-methods';

/* eslint-disable no-extra-boolean-cast, no-lonely-if */
/**
 * Intersection observer API
 *
 * This module sets up the intersection observer api and observes the rows.
 * If the row enters the viewport, the network requests are made and images are loaded.
 * When the row exits the viewport, the row is made empty, but the index history is stored.
 *
 * @returns {Object} Instance of Intersection Observer
 */
function Observer() {
  const options = {
    root: document.body.querySelector('.gallery'),
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const currentRow = entries[0];
      const gallery = document.body.querySelector('.gallery');
      let currentIndex = currentRow.target.dataset.startindex - 0;
      const nextRow = currentRow.target.nextSibling;
      const previousRow = currentRow.target.previousSibling;
      const firstIndex = 1;
      const finalIndex = 48;

      if (currentRow.isIntersecting || currentRow.isVisible) {
        //
        // Row is entering the viewport.
        //
        if (currentRow.boundingClientRect.y >= currentRow.rootBounds.y) {
          // When user is scrolling down, Row is entering from below the viewport.
          if (!!nextRow) {
            // Render the images of next row.
            if (nextRow.classList.contains('empty-row')) {
              renderImagesInRow(nextRow, nextRow.dataset.startindex - 0);
            }
            SetImageSrc(nextRow);
            // Load the empty-row of row after next row too.
            if (!nextRow.nextSibling) {
              currentIndex += 12;
              if (currentIndex > finalIndex) {
                currentIndex -= finalIndex;
              }
              LoadNextRowContainer(gallery, observer, currentIndex);
            }
          }
        } else {
          // When user is scrolling up, Row is entering from above the viewport.
          if (!!previousRow) {
            // Render the images of previous row, which is empty.
            if (previousRow.classList.contains('empty-row')) {
              renderImagesInRow(previousRow, previousRow.dataset.startindex - 0);
            }
            SetImageSrc(previousRow);
            // Load the empty-row of row before previous row too.
            if (!previousRow.previousSibling) {
              currentIndex -= 12;
              if (currentIndex < firstIndex) {
                currentIndex += finalIndex;
              }
              LoadPreviousRowContainer(gallery, observer, previousRow, currentIndex);
            }
          }
        }
      } else {
        //
        // Row is exiting the viewport.
        //
        if (!!currentRow.rootBounds) {
          if (currentRow.boundingClientRect.y < currentRow.rootBounds.y) {
            // When user is scrolling down, Row is exiting above the viewport.
            if (!!previousRow) {
              previousRow.textContent = null;
              previousRow.classList.add('empty-row');
              if (!!previousRow.previousSibling) {
                gallery.removeChild(previousRow.previousSibling);
              }
            }
          } else {
            // When user is scrolling up, Row is exiting below the viewport.
            if (!!nextRow) {
              nextRow.textContent = null;
              nextRow.classList.add('empty-row');
              if (!!nextRow.nextSibling) {
                gallery.removeChild(nextRow.nextSibling);
              }
            }
          }
        }
      }
    },
    options,
  );

  return observer;
}

export default Observer;
