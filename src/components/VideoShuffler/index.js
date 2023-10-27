import React, {
  Component,
  createRef,
  lazy,
} from 'react';
import PropTypes from 'prop-types';

import { ArrowRightIcon, ArrowLeftIcon } from 'images/icons/';
import { BrowserContext } from 'constants/contexts';
import {
  MainVideoContainer,
  ShufflerContainer,
} from './styles';

const Video = lazy(() => import('components/Video/youtube'));

// Component to add shuffling-animation to the filtered videos
class VideoShuffler extends Component {
  constructor(props) {
    super(props);
    this.shufflerRef = createRef(null);

    this.state = {
      width: Math.round(window.innerWidth * 0.7),
      height: Math.round(window.innerWidth * 0.7 * 0.562),
      currentIndex: Math.floor(Math.random() * 3),
      order: ['left preload', 'main preload', 'right preload'],
    };

    this.animatePreload = this.animatePreload.bind(this);
    this.animateOnClick = this.animateOnClick.bind(this);
    this.renderComponents = this.renderComponents.bind(this);
    this.calcWidthHeight = this.calcWidthHeight.bind(this);
  }

  componentDidMount() {
    const shufflerElem = this.shufflerRef.current;
    shufflerElem.addEventListener('click', (e) => { this.clickHandler(e); });
    shufflerElem.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.clickHandler(e);
    });

    this.animatePreload();
    this.calcWidthHeight();
  }

  componentDidUpdate() {
    this.animatePreload();
    this.calcWidthHeight();
  }

  componentWillUnmount() {
    this.shufflerRef.current.removeEventListener('click', (e) => { this.clickHandler(e); });
    this.shufflerRef.current.removeEventListener('touchend', (e) => { this.clickHandler(e); });
  }

  animatePreload() {
    const shufflerElem = this.shufflerRef.current;
    /* eslint-disable */
    if (shufflerElem.children[0].classList.contains('preload')) {
      for (let elem of shufflerElem.children) {
        setTimeout(() => { elem.classList.remove('preload'); }, 500);
      }
    }
    /* eslint-enable */
  }

  clickHandler(e) {
    if (!!e.target.classList && (e.target.classList.contains('left')
      || e.target.parentNode.classList.contains('left'))) {
      this.animateOnClick({
        main: 'MainToRight',
        left: 'LeftToMain',
        right: 'RightToLeft',
        MainToRight: 'right',
        LeftToMain: 'main',
        RightToLeft: 'left',
        subtract: true,
      });
    } else if (!!e.target.classList && (e.target.classList.contains('right')
      || e.target.parentNode.classList.contains('right'))) {
      this.animateOnClick({
        main: 'MainToLeft',
        left: 'LeftToRight',
        right: 'RightToMain',
        MainToLeft: 'left',
        LeftToRight: 'right',
        RightToMain: 'main',
        add: true,
      });
    }
  }

  animateOnClick(toggleClassNames) {
    const {
      currentIndex,
    } = this.state;
    const {
      videoData,
    } = this.props;
    const shufflerElem = this.shufflerRef.current;
    const classNames = ['main', 'left', 'right'];
    const newOrder = [];
    let newIndex = currentIndex;
    /* eslint-disable */
    for (let elem of shufflerElem.children) {
      const foundClass = classNames.find((eachClass) => (elem.classList.contains(eachClass)));
      elem.classList.remove(foundClass);
      elem.classList.add(toggleClassNames[foundClass]);
      newOrder.push(toggleClassNames[toggleClassNames[foundClass]]);
    }
    /* eslint-enable */

    if (toggleClassNames.add) {
      newIndex = currentIndex < videoData.length - 1 ? currentIndex + 1 : 0;
    } else if (toggleClassNames.subtract) {
      newIndex = currentIndex > 0 ? currentIndex - 1 : videoData.length - 1;
    }

    setTimeout(() => {
      this.setState({
        currentIndex: newIndex,
        order: newOrder,
      });
    }, 1200);
  }

  calcWidthHeight() {
    const { breakpoint } = this.context;
    const width = breakpoint < 2 ? Math.round(window.innerWidth * 0.7) : 640;
    const height = breakpoint < 2 ? Math.round(window.innerWidth * 0.7 * 0.562) : 360;

    this.setState((prevState) => {
      if (prevState.width !== width) {
        return {
          width,
          height,
        };
      }
      return null;
    });
  }

  renderComponents(index) {
    const {
      width,
      height,
      currentIndex,
      order,
    } = this.state;

    const {
      videoData,
    } = this.props;

    let comp;

    if (order[index].indexOf('main') >= 0) {
      comp = (
        <Video
          {...videoData[currentIndex]}
          width={`${width}`}
          height={`${height}`}
          autoplay={1}
          muted={0}
        />
      );
    } else if (order[index].indexOf('left') >= 0) {
      comp = <ArrowLeftIcon className="left" />;
    } else if (order[index].indexOf('right') >= 0) {
      comp = <ArrowRightIcon className="right" />;
    }
    return comp;
  }

  render() {
    const {
      width,
      height,
      order,
    } = this.state;

    return (
      <ShufflerContainer
        $height={height}
        ref={this.shufflerRef}
        className="video__shuffler"
      >
        <MainVideoContainer
          $height={height}
          $width={width}
          className={order[0]}
        >
          {this.renderComponents(0)}
        </MainVideoContainer>
        <MainVideoContainer
          $height={height}
          $width={width}
          className={order[1]}
        >
          {this.renderComponents(1)}
        </MainVideoContainer>
        <MainVideoContainer
          $height={height}
          $width={width}
          className={order[2]}
        >
          {this.renderComponents(2)}
        </MainVideoContainer>
      </ShufflerContainer>
    );
  }
}

VideoShuffler.contextType = BrowserContext;

VideoShuffler.propTypes = {
  videoData: PropTypes.arrayOf(PropTypes.object),
};

export default VideoShuffler;
