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

// Nav component that displays links to 5 main categories
const Nav = ({
  clickHandler = () => {},
}) => {
  const navElement = useRef(null);

  const startAnimation = (index = 0) => {
    // Slide-right animation
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
    document.getElementById('root').style.position = 'relative';
    return (() => {
      document.getElementById('root').style.height = 'auto';
      document.getElementById('root').style.position = 'static';
    });
  });

  return (
    <NavContainer ref={navElement}>
      <StyledCloseIcon
        className="nav__close"
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
          href,
        }) => (
          <LinkContainer
            to={href}
            key={`${Icon}${title}`}
            background={background}
            className="nav__link"
          >
            <NavLink>
              <Icon />
              <StyledH2 className="nav__link-title">{title}</StyledH2>
              <ChevronRightIcon className="nav__chevron-right" />
            </NavLink>
          </LinkContainer>
        ))
      }
      <LinkTwoContainer
        className="nav__link-two"
      >
        {
          NavIcons2.map(({
            title,
            Icon,
            background,
            href,
          }) => (
            <LinkTwoSubContainer
              to={href}
              key={`${Icon}${title}`}
              background={background}
              className="nav__link"
            >
              <NavLinkTwo>
                <Icon />
                <StyledH4>{title}</StyledH4>
                <ChevronRightIcon className="nav__chevron-right" />
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
