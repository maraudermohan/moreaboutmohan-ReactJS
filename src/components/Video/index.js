import React, { lazy, useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import { SpinnerIcon } from 'images/icons';
import {
  VideoContainer,
  FallbackContainer,
} from './styles';

const ErrorBoundary = lazy(() => import('components/ErrorBoundary'));

// Video component that renders embedded iframe
function Video({
  title = '',
  player = 'youtube',
  url = '',
  width = '640',
  height = '360',
  start = 0,
  className = 'video__iframe',
}) {
  const [hasLoaded, setHasLoaded] = useState(false);

  if (player === 'vimeo') {
    return (
      <ErrorBoundary>
        <VideoContainer
          title={title}
          width={width}
          height={height}
          src={`https://player.vimeo.com/video/${url}?color=ffffff&byline=0&portrait=0`}
          onLoad={() => { setHasLoaded(true); }}
          $hasLoaded={hasLoaded}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
  }
  return (
    <ErrorBoundary>
      <YouTube
        videoId={url}
        opts={{
          width,
          height,
          playerVars: {
            start,
            rel: 0,
          },
        }}
        className={className}
      />
    </ErrorBoundary>
  );
}

Video.propTypes = {
  title: PropTypes.string,
  player: PropTypes.oneOf(['youtube', 'vimeo']),
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  start: PropTypes.number,
  className: PropTypes.string,
};

export default Video;
