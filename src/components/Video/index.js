import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from 'components/ErrorBoundary';
import { SpinnerIcon } from 'images/icons';
import {
  VideoContainer,
  FallbackContainer,
} from './styles';

// Video component that renders embedded iframe
const Video = ({
  title = '',
  player = 'youtube',
  url = '',
  width = '640',
  height = '360',
  start = 0,
  autoplay = 0,
  className = 'video__iframe',
}) => {
  let src = `https://www.youtube-nocookie.com/embed/${url}?rel=1&start=${start}&autoplay=${autoplay}`;
  if (player === 'vimeo') {
    src = `https://player.vimeo.com/video/${url}?color=ffffff&byline=0&portrait=0`;
  }

  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <ErrorBoundary>
      <VideoContainer
        title={title}
        width={width}
        height={height}
        src={src}
        frameborder="0"
        onLoad={() => { setHasLoaded(true); }}
        $hasLoaded={hasLoaded}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className={className}
      />
      {
        !hasLoaded
        && (
          <FallbackContainer
            $width={width}
            $height={height}
          >
            <SpinnerIcon />
          </FallbackContainer>
        )
      }
    </ErrorBoundary>
  );
};

Video.propTypes = {
  title: PropTypes.string,
  player: PropTypes.oneOf(['youtube', 'vimeo']),
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  start: PropTypes.number,
  autoplay: PropTypes.number,
  className: PropTypes.string,
};

export default Video;
