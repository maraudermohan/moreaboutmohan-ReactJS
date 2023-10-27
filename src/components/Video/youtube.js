import React, { lazy, useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { YoutubePlayIcon } from 'images/icons/';
import { ThumbnailContainer, OverlayContainer } from './styles';

const LazyLoadImage = lazy(() => import('components/LazyLoadImage'));

// Component to render Youtube API
function Video({
  title = '',
  url = '',
  width = '640',
  height = '360',
  start = 0,
  className = 'video__youtube',
  thumbnail,
}) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className={className} style={{ width: `${width}px`, height: `${height}px` }}>
      <div id={`${title}`} />
      {
        !videoLoaded ? (
          <ThumbnailContainer onClick={() => setVideoLoaded(true)}>
            <LazyLoadImage
              imageUrl={thumbnail}
              imageAlt={`${url}-thumbnail`}
              width={`${width}px`}
              height={`${height}px`}
            />
            <OverlayContainer />
            <YoutubePlayIcon className="youtube-play" />
          </ThumbnailContainer>
        ) : (
          <YouTube
            videoId={url}
            opts={{
              width,
              height,
              playerVars: {
                autoplay: 1,
                start,
                rel: 0,
              },
            }}
          />
        )
      }
    </section>
  );
}

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  start: PropTypes.number,
  className: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Video;
