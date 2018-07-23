import React from 'react';

import goldenGateSmall from '../../../public/golden-gate-bridge-wallpaper-small.jpg';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let target = document.getElementById('jumbotron-scroll-target');
    let config = {
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    };
    target.scrollIntoView(config);
  }

  render() {

    const { isMobile, isPortait} = this.props;

    return (
      /*
        If we are intending to make any of the images here unselectable,
        we will have change the element type to a <div> that uses the images as a background
      */
      <div id="jumbotron">
        <div className="jumbotron-images-wrapper">
          <div className="jumbotron-image-full-size" style={{backgroundImage: `url(${goldenGateSmall})`}}/>
        </div>
        <div id="jumbotron-scroll-target" onClick={this.handleScroll} onTouchStart={this.handleScroll}>
          <span className="target-button">Start here!</span>
        </div>
      </div>

    );

  }
}