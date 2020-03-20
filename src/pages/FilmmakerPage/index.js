import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Video from 'components/Video/youtube';
import { StyledH1, StyledSubtext } from 'components/Typography';
import { BrowserContext } from 'constants/contexts';
import colors from 'constants/colors';
import data, { demo } from './filmmaker-data';
import {
  FilmmakerPageContainer,
  DemoContainer,
  filterInitialValues,
  filterKeys,
  FilterContainer,
  filterIcons,
  StyledButton,
} from './styles';

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

    if (property === 'DanceVideos' && bool) {
      newObj.ShortFilms = !bool;
    } else if (property === 'ShortFilms' && bool) {
      newObj.DanceVideos = !bool;
    }
    const newFilterValues = { ...filterValues, ...newObj };
    this.setState({ filterValues: newFilterValues });
  }

  closeDemoReelVideo() {
    setTimeout(() => this.setState({ demoReelDone: true }), 2000);
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
    this.updateFilterData();

    return (
      <FilmmakerPageContainer>
        <Header />
        <StyledH1>Filmmaker Reel</StyledH1>
        <DemoContainer>
          {
            demoReelDone
              ? (
                <FilterContainer>
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
              ) : (
                <Video
                  {...demo}
                  height={`${breakpoint < 2 ? (0.9 * 0.56 * window.innerHeight) : '360'}`}
                  width={`${breakpoint < 2 ? (0.9 * window.innerWidth) : '640'}`}
                  autoplay={1}
                  muted={false}
                  onDone={() => this.closeDemoReelVideo()}
                />
              )
          }
        </DemoContainer>
        {
          // data.map((video, index) => (
          //   <Video
          //     key={video.title}
          //     {...video}
          //   />
          // ))
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
