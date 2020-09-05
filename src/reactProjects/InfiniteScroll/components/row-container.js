/**
 * Row of images
 *
 * Row contains a set of images, which are progressively loaded.
 * Initially the images are empty, but on entering the viewport, images's src are set.
 *
 * @param {Number} startIndex Start index of the 6 images in the current row
 *
 * @returns {Element} Row container
 */
const RowContainer = function (startIndex) {
  const row = document.createElement('div');
  row.setAttribute('class', `row  img-${startIndex}  empty-row`);
  row.setAttribute('data-startindex', startIndex);

  return row;
};

export default RowContainer;
