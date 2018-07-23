import React from 'react';
import ReactDOM from 'react-dom';

const scrollConfig = {
  block: 'start',
  inline: 'nearest',
  behavior: 'smooth'
};

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.handleHomeScroll = this.handleHomeScroll.bind(this);
  }

  componentDidMount() {
    let {isMobile} = this.props;
    let event = isMobile ? 'touchstart' : 'click';
    ReactDOM.findDOMNode(this).addEventListener(event, this.handleHomeScroll, {passive: false});
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener(event, this.handleHomeScroll, {passive: false});
  }

  handleHomeScroll(e) {
    e.preventDefault();
    document.getElementById('jumbotron').scrollIntoView(scrollConfig);
  };

  render() {
    return (
      <div className="navigation-logo-wrapper">
        <div className="navigation-logo-gradient"/>
        <a className="navigation-logo" />
      </div>
    );
  }

}