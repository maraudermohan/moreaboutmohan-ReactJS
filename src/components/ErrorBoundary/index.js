import { Component } from 'react';
import PropTypes from 'prop-types';

// Error handling component that renders null, instead of errored out component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const {
      error,
    } = this.state;

    const {
      children,
    } = this.props;

    if (error) {
      return null;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
  ]),
};

export default ErrorBoundary;
