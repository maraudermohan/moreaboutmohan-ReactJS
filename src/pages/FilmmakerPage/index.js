import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Video from 'components/Video/youtube';
import VideoShuffler from 'components/VideoShuffler';
import { StyledH1, StyledH2, StyledSubtext } from 'components/Typography';
import { BrowserContext } from 'constants/contexts';
import colors from 'constants/colors';
import data, { demo } from './filmmaker-data';
import {
  FilmmakerPageContainer,
  DemoContainer,
  CountContainer,
  filterInitialValues,
  filterKeys,
  FilterContainer,
  filterIcons,
  StyledButton,
} from './styles';

// Page component to render all my dance videos and short films
// Added a filter by Role/Type and Shuffle animation
class FilmmakerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValues: filterInitialValues,
      demoReelDone: false,
    };
  }

  clickFilterHandler(property, bool) {
    const {
      filterValues,
    } = this.state;
    const newObj = {
      [property]: bool,
    };

    if (property === 'Dance-Videos' && bool) {
      newObj['Short-Films'] = !bool;
    } else if (property === 'Short-Films' && bool) {
      newObj['Dance-Videos'] = !bool;
    }

    const newFilterValues = { ...filterValues, ...newObj };
    this.setState({ filterValues: newFilterValues });
  }

  closeDemoReelVideo() {
    setTimeout(() => this.setState({ demoReelDone: true }), 1000);
  }

  updateFilterData() {
    const {
      filterValues,
    } = this.state;
    const newFilterValues = Object.keys(filterValues).filter((key) => !!filterValues[key]);
    let filteredData = data;
    for (let index = 0; index < newFilterValues.length; index += 1) {
      filteredData = filteredData.filter((video) => (video[newFilterValues[index]]));
    }
    return (filteredData);
  }

  render() {
    const {
      filterValues,
      demoReelDone,
    } = this.state;
    const {
      breakpoint = 2,
    } = this.context;

    return (
      <FilmmakerPageContainer className="filmmaker-page">
        <Header />
        <StyledH1>Filmmaker Reel</StyledH1>
        <FilterContainer
          $show={demoReelDone}
        >
          <StyledSubtext>Role:</StyledSubtext>
          <StyledSubtext>Type:</StyledSubtext>
          {
            filterKeys.map((item, index) => {
              let Icon = filterIcons[6];
              if (!filterValues[item]) {
                Icon = filterIcons[index];
              }

              return (
                <StyledButton
                  key={item}
                  onClick={() => this.clickFilterHandler(item, !filterValues[item])}
                  $selected={filterValues[item]}
                >
                  <Icon />
                  { item }
                </StyledButton>
              );
            })
          }
        </FilterContainer>
        <CountContainer
          $show={demoReelDone}
        >
          <StyledSubtext>Count:</StyledSubtext>
          <StyledH2>{this.updateFilterData().length}</StyledH2>
        </CountContainer>
        {
          demoReelDone && this.updateFilterData().length > 1
            && (
              <VideoShuffler
                videoData={this.updateFilterData()}
              />
            )
        }
        {
          !demoReelDone
            && (
              <DemoContainer>
                <Video
                  {...demo}
                  height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
                  width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
                  autoplay={1}
                  muted={false}
                  onDone={() => this.closeDemoReelVideo()}
                />
              </DemoContainer>
            )
        }
        {
          demoReelDone && this.updateFilterData().length === 1
            && (
              <DemoContainer>
                <Video
                  {...this.updateFilterData()[0]}
                  height={`${breakpoint < 2 ? Math.round(0.8 * 0.56 * window.innerWidth) : '360'}`}
                  width={`${breakpoint < 2 ? Math.round(0.8 * window.innerWidth) : '640'}`}
                  autoplay={1}
                  muted={false}
                  onDone={() => this.closeDemoReelVideo()}
                />
              </DemoContainer>
            )
        }
        <Footer
          hoverColor={colors.MAGENTA}
          backgroundColor={colors.LATTE}
          textColor={colors.PANTONE}
        />
      </FilmmakerPageContainer>
    );
  }
}

FilmmakerPage.contextType = BrowserContext;

export default FilmmakerPage;
