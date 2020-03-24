import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Video extends Component {
  constructor(props) {
    super(props);
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
    } = this.props;

    return (
      <section className="video__youtube">
        <div id={`${title}`} />
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
  muted: PropTypes.bool,
  onDone: PropTypes.func,
};

export default Video;
