import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Video from 'components/Video/youtube';
import VideoShuffler from 'components/VideoShuffler';
import {
  StyledH1,
  StyledH2,
  StyledH4,
  StyledSubtext,
} from 'components/Typography';
import { BrowserContext } from 'constants/contexts';
import colors from 'constants/colors';
import { videosData, spotlightData } from './filmmaker-data';
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
      filterData: videosData.slice(0, 5),
      browserWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      filterData: this.updateFilterData(),
    }), 2000);
  }

  updateFilterData() {
    const {
      filterValues,
    } = this.state;
    const newFilterValues = Object.keys(filterValues).filter((key) => !!filterValues[key]);
    let filteredData = videosData;
    for (let index = 0; index < newFilterValues.length; index += 1) {
      filteredData = filteredData.filter((video) => (video[newFilterValues[index]]));
    }
    return (filteredData);
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
    this.setState({ filterValues: newFilterValues, filterData: [] }, () => {
      this.setState({ filterData: this.updateFilterData() });
    });
  }

  render() {
    const {
      filterValues,
      filterData,
      browserWidth,
    } = this.state;
    const {
      breakpoint = 2,
    } = this.context;

    return (
      <FilmmakerPageContainer className="filmmaker-page">
        <Header />
        <StyledH1>Filmmaking projects</StyledH1>
        <VideoShuffler videoData={spotlightData} />
        <CountContainer>
          <StyledH2>All Videos</StyledH2>
          <StyledH4>{`${filterData.length} results`}</StyledH4>
        </CountContainer>
        <FilterContainer>
          <StyledSubtext>Filter by Role:</StyledSubtext>
          <StyledSubtext>Filter by Type:</StyledSubtext>
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
        <DemoContainer $browserWidth={browserWidth}>
          {
            filterData.length && (filterData.map((singleVideo) => (
              <Video
                key={singleVideo.url}
                height={`${breakpoint < 2 ? '112' : '180'}`}
                width={`${breakpoint < 2 ? '200' : '320'}`}
                {...singleVideo}
                autoplay={1}
                muted={false}
              />
            )))
          }
        </DemoContainer>
        <Footer
          backgroundColor={colors.MAGENTA}
          textColor={colors.LATTE}
        />
      </FilmmakerPageContainer>
    );
  }
}

FilmmakerPage.contextType = BrowserContext;

export default FilmmakerPage;
