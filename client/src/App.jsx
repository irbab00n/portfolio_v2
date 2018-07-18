import React from 'react';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';
import Features from './components/Features';

import getCurrentYOffset from './lib/getCurrentYOffset';
import getDocumentHeight from './lib/getDocumentHeight';
import navScrollHandler from './lib/navScrollHandler';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentScrolled: 0,
      isPortrait: false,
      jumbotronHeight: 0,
    };
    this.masterScrollHandler = this.masterScrollHandler.bind(this);
    this.updateJumbotronHeight = this.updateJumbotronHeight.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateJumbotronHeight);
    this.updateJumbotronHeight();
  }

  masterScrollHandler() {
    window.requestAnimationFrame(this.masterScrollHandler);
    let currentYOffset = getCurrentYOffset();
    navScrollHandler(currentYOffset, this.state.jumbotronHeight);
  }

  updateJumbotronHeight() {
    let jumbotronHeight = document.getElementById('jumbotron').offsetHeight;
    this.setState({
      jumbotronHeight
    }, this.masterScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateJumbotronHeight);
  }

  render() {

    /* 
      When refactoring into React Router, need to be aware of what logic needs to be handled
      on a global level, such as the current Y offset of the page, whether or not the view is mobile
      and we need a flag in JavaScript.
    */
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const { isPortrait, jumbotronHeight } = this.state;

    return (
      <div className="content-body">
        <Navigation 
          isMobile={isMobile}
          jumbotronHeight={jumbotronHeight}
          currentYOffset={getCurrentYOffset()}
        />
        <Jumbotron
          currentYOffset={getCurrentYOffset()}
          jumbotronHeight={jumbotronHeight}
          isMobile={isMobile}
          isPortrait={isPortrait}
        />
        <Features />
      </div>
    );
  }
}