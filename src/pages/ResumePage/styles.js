import styled from 'styled-components';

import colors from 'constants/colors';
import mq from 'constants/media-queries';
import { StyledH1, StyledH3, StyledSubtext } from 'components/Typography';
import resume from 'images/workexperience.jpg';

export const downloadImg = resume;

export const ResumePageContainer = styled.main`
  background: ${colors.PANTONE};

  header {
    background: none;
  }

  ${StyledH1} {
    padding: 150px 0 100px 0;
    text-align: center;
    color: ${colors.LATTE};
    background: ${colors.DAYLILY};

    @media ${mq.uptoTablet} and (orientation: landscape),
    ${mq.tablet} {
      padding: 150px 0 80px 0;
    }
  }

  ${StyledSubtext} {
    color: ${colors.LATTE};
    text-align: center;
  }
`;

export const DownloadContainer = styled.a`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background: linear-gradient(180deg, ${colors.DAYLILY} 50%, ${colors.PANTONE} 50.1%);

  > span {
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    margin: 0 5%;
    top: 0;
    left: 0;
    z-index: 1;
    border-radius: 7px;
    background: ${colors.LATTE}E6;
    transition: all 0.5s;
  }

  &:hover {
    > div {
      display: flex;
    }

    > span {
      width: 90%;
    }

    @media ${mq.desktop} {
      > span {
        width: 800px;
      }
    }
  }

  img{
    display: block;
    margin: 0 auto;
    border-radius: 7px;
    transition: all 0.5s;
  }

  > div {
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 2;
    transition: all 0.5s;
  }

  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
    color: ${colors.PANTONE};
  }

  ${StyledH3} {
    color: ${colors.PANTONE};
    font-weight: 500;
  }

  @media ${mq.desktop} {
    img {
      width: 800px;
    }

    > span {
      margin: 0 calc(50% - 400px);
    }
  }
`;

export const BoxSubcontainer = styled.div`
  position: absolute;
  width: 47%;
  top: 0;
  left: 53%;

  section {
    margin: 0 0 10px 0;
    width: 100%;
  }

  @media ${mq.desktop} {
    width: 400px;
    left: 52%;
  }
`;

export const Timeline = styled.div`
  position: absolute;
  height: calc(100% - 24px);
  top: 2px ;
  left: calc(50% - 1px);
  border: 1px solid ${colors.LATTE};
`;

export const data = [
  {
    title: 'SurveyMonkey',
    color: '#00bf6f',
    height: 3,
    alignment: 'right',
  },
  {
    title: 'Intuit',
    color: '#0377C5',
    height: 3,
    alignment: 'left',
  },
  {
    title: 'Zynga',
    color: '#DEC79B',
    height: 2,
    alignment: 'right',
  },
  {
    title: 'Masters',
    subTitle: 'Carnegie Mellon',
    color: '#DC0606',
    height: 9,
    alignment: 'left',
  },
  {
    title: 'EFSD + SMALLab',
    color: '#9730A6',
    height: 2,
    alignment: 'right',
  },
  {
    title: 'Smilegate',
    color: '#21EBC8',
    height: 2,
    alignment: 'right',
  },
  {
    title: 'Cooliris',
    color: '#195905',
    height: 2,
    alignment: 'right',
  },
  {
    title: 'Electronic Arts',
    color: '#F56C2D',
    height: 2,
    alignment: 'right',
  },
  {
    title: 'Nokia Siemens',
    color: '#F2DB22',
    height: 3,
    alignment: 'left',
  },
  {
    title: 'Bachelors',
    subTitle: 'PSG Tech, Coimbatore',
    color: '#DE5D83',
    height: 3,
    alignment: 'right',
  },
];
