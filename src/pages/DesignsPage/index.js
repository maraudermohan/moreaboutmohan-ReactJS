import React, { Component, createRef, Fragment } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { StyledH1, StyledParagraph, StyledSubtext } from 'components/Typography';
import DesignCard from 'components/DesignCard';
import Video from 'components/Video';
import ContentList from 'components/ContentList';
import { BrowserContext } from 'constants/contexts';
import colors from 'constants/colors';
import { DownloadIcon } from 'images/icons';
import { desktopList, mobileList } from './data';
import {
  DesignButton,
  DesignsPageContainer,
  DesignRow,
  DesignContentHidden,
  Gradient,
} from './styles';

// Page component for all my design collections
class DesignsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: null,
      currentRow: -1,
      data: desktopList,
      hiddenElemRef: createRef(null),
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.updateCardList();
  }

  componentDidUpdate() {
    this.updateCardList();
  }

  updateCardList() {
    const { data } = this.state;
    let newData = desktopList;
    if (window.innerWidth < 880) {
      newData = mobileList;
    }
    if (newData !== data) {
      this.setState({ data: newData, currentCard: null, currentRow: -1 });
    }
  }

  clickHandler(cardData) {
    const {
      currentCard = null,
      data,
      hiddenElemRef,
    } = this.state;

    const newRow = data.reduce((selected, row, index) => {
      if (row.find((card) => card.pdf === cardData.pdf)) {
        return index;
      }
      return selected;
    }, -1);

    if (!currentCard) {
      this.setState({ currentCard: cardData, currentRow: newRow });
    } else if (currentCard.pdf === cardData.pdf) {
      hiddenElemRef.current.querySelector('.design-page__hidden.selected').classList.remove('selected');
      setTimeout(() => { this.setState({ currentCard: null, currentRow: -1 }); }, 750);
    } else if (currentCard.pdf !== cardData.pdf) {
      hiddenElemRef.current.querySelector('.design-page__hidden.selected').classList.remove('selected');
      setTimeout(() => {
        this.setState({ currentCard: null, currentRow: -1 }, () => {
          this.setState({ currentCard: cardData, currentRow: newRow });
        });
      }, 750);
    }
  }

  render() {
    const {
      currentCard = null,
      currentRow = null,
      data,
      hiddenElemRef = null,
    } = this.state;

    return (
      <BrowserContext.Consumer>
        {
          ({ breakpoint }) => (
            <DesignsPageContainer className="design-page">
              <Header />
              <StyledH1>Design works</StyledH1>
              <Gradient ref={hiddenElemRef}>
                {
                  data.map((row, index) => (
                    <Fragment key={`${row[0].title}${row[1].title}`}>
                      <DesignRow>
                        {
                          row.map((cardData) => (
                            <DesignCard
                              key={cardData.title}
                              clickHandler={this.clickHandler}
                              {...cardData}
                              isCurrent={currentCard && (currentCard.pdf === cardData.pdf)}
                            />
                          ))
                        }
                      </DesignRow>
                      <DesignContentHidden
                        className={`design-page__hidden ${(currentCard && (currentRow === index)) ? 'selected' : ''}`}
                      >
                        <DesignRow>
                          <StyledSubtext className="design-page__time">{currentCard ? currentCard.time : ''}</StyledSubtext>
                          <StyledParagraph className="design-page__year">{currentCard ? currentCard.year : ''}</StyledParagraph>
                          <DesignButton
                            href={currentCard ? currentCard.pdf : ''}
                            target="_blank"
                          >
                            <DownloadIcon />
                            PDF
                          </DesignButton>
                          {
                            currentCard && (
                              <>
                                {
                                  currentCard.video && (
                                    <Video
                                      {...currentCard.video}
                                      height={`${breakpoint < 1 ? Math.round(0.8 * 0.56 * window.innerWidth) : '280'}`}
                                      width={`${breakpoint < 1 ? Math.round(0.8 * window.innerWidth) : '500'}`}
                                      autoplay={1}
                                      muted={0}
                                      className="design-page__video"
                                    />
                                  )
                                }
                              </>
                            )
                          }
                          <ContentList
                            alignment="full"
                            browserHeight={window.innerHeight}
                            data={currentCard ? currentCard.summaryBody : []}
                            heading={currentCard ? currentCard.summaryHeading : ''}
                            className="design-page__summary"
                          />
                        </DesignRow>
                      </DesignContentHidden>
                    </Fragment>
                  ))
                }
              </Gradient>
              <Footer hoverColor={colors.APPLE} />
            </DesignsPageContainer>
          )
        }
      </BrowserContext.Consumer>
    );
  }
}

export default DesignsPage;
