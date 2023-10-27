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
  const url = `/img/infinite${imageIndex}.webp`;

  img.src = '/img/white.webp';
  img.dataset.src = url;
  img.setAttribute('class', 'wildlife-image');
  img.setAttribute('alt', `Wildlife ${imageIndex}`);

  return img;
}

export default Image;
