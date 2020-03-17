import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledH3, StyledSubtext } from 'components/Typography';
import { email, github, linked } from 'images/icons';
import { FooterContainer, FooterLine, IconContainer } from './styles';

// Footer component with Social information
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Say Hello.',
    };

    this.iconClickhandler = this.iconClickhandler.bind(this);
  }

  iconClickhandler(href) {
    const { text } = this.state;
    if (text === href) {
      this.setState({ text: 'Say Hello.' });
    } else {
      this.setState({ text: href });
    }
  }

  render() {
    const {
      text,
    } = this.state;

    const {
      hovercolor,
    } = this.props;

    return (
      <FooterContainer
        $hovercolor={hovercolor}
      >
        <FooterLine />
        <StyledH3>{text}</StyledH3>
        <IconContainer>
          {
            [email, github, linked].map(({
              Icon,
              href,
            }) => (
              <Icon
                key={`${Icon}-${href}`}
                onClick={() => { this.iconClickhandler(href); }}
                data-selected={text === href}
              />
            ))
          }
        </IconContainer>
        <StyledSubtext>Designed & Developed by Mohan Subramanian, 2020!</StyledSubtext>
      </FooterContainer>
    );
  }
}

Footer.propTypes = {
  hovercolor: PropTypes.string,
};

export default Footer;
