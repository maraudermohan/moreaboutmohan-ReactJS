import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { StyledH2, StyledH4 } from 'components/Typography';
import { ChevronRightIcon } from 'images/icons';
import {
  NavIcons,
  NavIcons2,
  NavContainer,
  LinkContainer,
  NavLink,
  LinkTwoContainer,
  LinkTwoSubContainer,
  NavLinkTwo,
  StyledCloseIcon,
} from './styles';

const Nav = ({
  clickHandler = () => {},
}) => {
  const navElement = useRef(null);

  const startAnimation = (index = 0) => {
    let newIndex = index;
    navElement.current.children[newIndex].classList.toggle('animated');
    newIndex += 1;

    if (newIndex < navElement.current.children.length) {
      setTimeout(() => { startAnimation(newIndex); }, 200);
    }
  };

  useEffect(() => {
    setTimeout(() => { startAnimation(0); }, 100);
  }, []);

  useEffect(() => {
    document.getElementById('root').style.height = `${window.innerHeight}px`;
    document.getElementById('root').style.overflow = 'hidden';
    return (() => {
      document.getElementById('root').style.height = 'auto';
      document.getElementById('root').style.overflow = 'initial';
    });
  });

  return (
    <NavContainer ref={navElement}>
      <StyledCloseIcon
        onClick={() => {
          startAnimation(0);
          setTimeout(clickHandler, 850);
        }}
      />
      {
        NavIcons.map(({
          title,
          Icon,
          background,
        }) => (
          <LinkContainer
            key={`${Icon}${title}`}
            $background={background}
          >
            <NavLink>
              <Icon />
              <StyledH2>{title}</StyledH2>
              <ChevronRightIcon />
            </NavLink>
          </LinkContainer>
        ))
      }
      <LinkTwoContainer>
        {
          NavIcons2.map(({
            title,
            Icon,
            background,
          }) => (
            <LinkTwoSubContainer
              key={`${Icon}${title}`}
              $background={background}
            >
              <NavLinkTwo>
                <Icon />
                <StyledH4>{title}</StyledH4>
                <ChevronRightIcon />
              </NavLinkTwo>
            </LinkTwoSubContainer>
          ))
        }
      </LinkTwoContainer>
    </NavContainer>
  );
};

Nav.propTypes = {
  clickHandler: PropTypes.func,
};

export default Nav;
