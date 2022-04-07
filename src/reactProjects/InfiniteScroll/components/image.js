/**
 * Image component
 *
 * Component creates a lazy-loading img element,
 * The url of the image is not set as src attribute but as data-src.
 * This component can be progressively loaded later, by copying the data-src to src.
 *
 * @param {Number} imageIndex Image index
 *
 * @returns {Element} Img element
 */
function Image(imageIndex) {
  const img = document.createElement('img');
  const url = `http://www.moreaboutmohan.com/uploads/infinite${imageIndex}.jpg`;

  img.src = 'http://www.moreaboutmohan.com/uploads/white.jpg';
  img.dataset.src = url;
  img.setAttribute('class', 'wildlife-image');
  img.setAttribute('alt', `Wildlife ${imageIndex}`);

  return img;
}

export default Image;
