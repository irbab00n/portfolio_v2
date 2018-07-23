import React from 'react';
import ReactDOM from 'react-dom';

export default class Control extends React.Component {
  constructor(props) {
    super(props);
    this.renderControlType = this.renderControlType.bind(this);
  }

  componentDidMount() {
    let { isMobile } = this.props;
    ReactDOM.findDOMNode(this).addEventListener(isMobile ? 'touchend': 'click', this.handleClick, {passive: false});
  }

  componentWillUnmount() {
    let { isMobile } = this.props;
    ReactDOM.findDOMNode(this).removeEventListener(isMobile ? 'touchend': 'click', this.handleClick,);
  }

  renderControlType() {
    let { direction, height, isMobile, updateFunction } = this.props;

    let update = 'dec';
    let tag = 10094;

    direction === 'right' ? (update = 'inc', tag = 10095) : null;

    if (isMobile) {
      return (
        <div 
          className={`about-${height}-ch control control-${direction} no-select`}
          onTouchEnd={e => updateFunction(e, update)}
        >
          {String.fromCharCode(tag)}
        </div>
      );
    } else {
      return (
        <div
          className={`about-${height}-ch control control-${direction} no-select`}
          onClick={e => updateFunction(e, update)}
        >
          {String.fromCharCode(tag)}
        </div>
      );
    }
  }

  render() {
    return this.renderControlType();
  }
}