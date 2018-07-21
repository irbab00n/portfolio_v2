import React from 'react';

import goldenGateSmall from '../../../public/golden-gate-bridge-wallpaper-small.jpg';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleTargetMouseOver = this.handleTargetMouseOver.bind(this);
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

  handleTargetMouseOver() {
    let hoverBackground = document.getElementsByClassName('button-hover-background')[0];
    hoverBackground.classList.toggle('button-hovered');
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
          <img className="jumbotron-image-full-size" src={goldenGateSmall}/>
        </div>
        <div id="jumbotron-scroll-target" onMouseEnter={this.handleTargetMouseOver} onMouseLeave={this.handleTargetMouseOver}>
          <span className="target-button no-select" onClick={this.handleScroll} onTouchStart={this.handleScroll}>Start here!</span>
          <div className="button-hover-background"/>
        </div>
      </div>

    );

  }
}