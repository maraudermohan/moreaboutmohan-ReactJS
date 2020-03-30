import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledH3, StyledSubtext } from 'components/Typography';
import {
  email,
  github,
  linked,
  info,
} from 'images/icons';
import colors from 'constants/colors';
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
      hoverColor = colors.DAYLILY,
      backgroundColor = colors.PANTONE,
      textColor = colors.LATTE,
    } = this.props;

    return (
      <FooterContainer
        $hoverColor={hoverColor}
        $backgroundColor={backgroundColor}
        $textColor={textColor}
      >
        <FooterLine $textColor={textColor} />
        <StyledH3 className="footer__text">{text}</StyledH3>
        <IconContainer className="footer__icon">
          {
            [email, github, linked, info].map(({
              Icon,
              data,
            }) => (
              <Icon
                key={`${Icon}-${data}`}
                onClick={() => { this.iconClickhandler(data); }}
                data-selected={text === data}
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
  hoverColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Footer;
