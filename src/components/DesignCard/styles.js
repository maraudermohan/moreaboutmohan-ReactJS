import styled from 'styled-components';

import colors from 'constants/colors';

const DesignCardContainer = styled.div`
  display: flex;
  width: calc(50% - 8px);
  height: 180px;
  position: relative;
  border: 4px solid ${colors.LATTE};
  border-radius: 4px;
  transition: all 0.3s;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    .design-card__overlay {
      width: 100%;
    }
  
    .design-card__image {
      background-image: url(${(props) => props.$hoverImg});
    }

    .design-card__title {
      opacity: 1;
    }
  }

  &.selected {
    border: 4px solid ${colors.LATTE};

    .design-card__triangle {
      display: block;
    }
  }

  @media (min-width: 880px) {
    width: calc(33.33% - 8px);
    height: 240px;
    margin: 0 4px;

    .design-card__title {
      font-size: 17px;
    }
  }

  .design-card__overlay {
    display: block;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .85;
    background: ${colors.MAGENTA};
    z-index: 2;
    transition: all 0.2s;
  }

  .design-card__image {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .9;
    border-radius: 4px;
    background-image: url(${(props) => props.$defaultImg});
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  .design-card__title {
    position: relative;
    font-size: 26px;
    z-index: 3;
    opacity: 0;
    color: ${colors.LATTE};
    text-align: center;
    text-shadow: 2px 2px 3px ${colors.BLACK}99,
                -1px -1px 3px ${colors.BLACK}99;
  }

  .design-card__triangle {
    display: none;
    position: absolute;
    width: 0;
    height: 0;
    z-index: 4;
    bottom: -36px;
    border: 16px solid ${colors.LATTE};
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
    transition: all 0.4s;
  }
`;

export default DesignCardContainer;
