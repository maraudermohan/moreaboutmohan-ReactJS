import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SpinnerIcon } from 'images/icons';
import {
  FallbackContainer,
} from './styles';

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoaded: false,
    };
    this.loadVideo = this.loadVideo.bind(this);
  }

  componentDidMount() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
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
      muted = true,
      onDone = () => {},
    } = this.props;
    this.player = new window.YT.Player(`${title}`, {
      videoId: url,
      width,
      height,
      playerVars: {
        autoplay,
        start,
        rel: 1,
      },
      events: {
        onReady: () => {
          if (muted) {
            this.player.mute();
          } else {
            this.player.setVolume(70);
          }
          this.setState({ hasLoaded: true });
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
      width = '640',
      height = '360',
    } = this.props;

    const {
      hasLoaded = false,
    } = this.state;

    return (
      <>
        <section
          style={{ height: hasLoaded ? '100%' : '0' }}
        >
          <div id={`${title}`} />
        </section>
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
      </>
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
  muted: PropTypes.bool,
  onDone: PropTypes.func,
};

export default Video;
