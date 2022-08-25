import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoadImage from 'components/LazyLoadImage';
import { YoutubePlayIcon } from 'images/icons/';
import { ThumbnailContainer, OverlayContainer } from './styles';

// Component to render Youtube API
class Video extends Component {
  constructor(props) {
    super(props);
    this.loadVideo = this.loadVideo.bind(this);
    this.state = {
      videoLoaded: false,
    };
  }

  componentDidMount() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  loadVideo() {
    const {
      title = '',
      url = '',
      width = '640',
      height = '360',
      start = 0,
      autoplay = 0,
      muted = 1,
      onDone = () => {},
    } = this.props;
    this.player = new window.YT.Player(`${title}`, {
      videoId: url,
      width,
      height,
      playerVars: {
        autoplay,
        start,
        rel: 0,
      },
      events: {
        onReady: () => {
          this.setState({ videoLoaded: true });
          if (muted) {
            this.player.mute();
          } else {
            this.player.setVolume(70);
          }
        },
        onStateChange: (e) => {
          if (e.data === 0) {
            onDone();
          }
        },
      },
    });
  }

  render() {
    const {
      title = '',
      className = 'video__youtube',
      url,
      width,
      height,
      thumbnail,
    } = this.props;
    const { videoLoaded = false } = this.state;

    return (
      <section className={className} style={{ width: `${width}px`, height: `${height}px` }}>
        <div id={`${title}`} />
        {
          !videoLoaded && (
            <ThumbnailContainer onClick={() => { this.loadVideo(); }}>
              <LazyLoadImage
                imageUrl={thumbnail}
                imageAlt={`${url}-thumbnail`}
                width={`${width}px`}
                height={`${height}px`}
              />
              <OverlayContainer />
              <YoutubePlayIcon className="youtube-play" />
            </ThumbnailContainer>
          )
        }
      </section>
    );
  }
}

Video.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  start: PropTypes.number,
  autoplay: PropTypes.number,
  muted: PropTypes.number,
  onDone: PropTypes.func,
  className: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Video;
