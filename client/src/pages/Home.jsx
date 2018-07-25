import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Features from '../components/Features';

import getCurrentYOffset from '../lib/getCurrentYOffset';
import navScrollHandler from '../lib/navScrollHandler';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotronHeight: 0
    };
    this.masterScrollHandler = this.masterScrollHandler.bind(this);
    this.updateViewInformation = this.updateViewInformation.bind(this);
  }

  componentDidMount() {
    window.addEventListener('orientationchange', () => setTimeout(this.updateViewInformation, 200));
    this.updateViewInformation();
  }

  componentWillUnmount() {
    window.removeEventListener('orientationchange', () => setTimeout(this.updateViewInformation, 200));
  }

  masterScrollHandler() {
    let currentYOffset = getCurrentYOffset();
    navScrollHandler(currentYOffset, this.state.jumbotronHeight);
    window.requestAnimationFrame(this.masterScrollHandler);
  }

  updateViewInformation() {
    let jumbotronHeight = document.getElementById('jumbotron').offsetHeight;
    this.setState({
      jumbotronHeight
    }, this.masterScrollHandler);
  }

  render() {

    const { jumbotronHeight } = this.state;
    const { isMobile, isPortrait } = this.props;
    
    return (
      <div className="content-body">
        <Jumbotron
          currentYOffset={getCurrentYOffset()}
          jumbotronHeight={jumbotronHeight}
          isMobile={isMobile}
          isPortrait={isPortrait}
        />
        <Features 
          isMobile={isMobile}
          isPortrait={isPortrait}
        />
      </div>
    );
  }
}