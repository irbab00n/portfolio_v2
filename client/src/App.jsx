import React from 'react';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: false,
      jumbotronHeight: 0,
    };
    this.navScrollToggleHandler = this.navScrollToggleHandler.bind(this);
    this.updateJumbotronHeight = this.updateJumbotronHeight.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.navScrollToggleHandler);
    window.addEventListener('orientationchange', this.updateJumbotronHeight);
    this.updateJumbotronHeight();
  }

  navScrollToggleHandler() {
    let { jumbotronHeight } = this.state;
    let currentYOffset = window.pageYOffset;
    
    let nav = document.getElementsByClassName('navigation')[0];
    let mobileNavToggle = document.getElementsByClassName('mobile-nav-toggle')[0];

    if (mobileNavToggle.classList.contains('is-active')) {
      return;
    }

    if (currentYOffset >= jumbotronHeight - 1) {
      nav.classList.contains('toggled') ? null : nav.classList.toggle('toggled');
    } else {
      nav.classList.contains('toggled') ? nav.classList.toggle('toggled') : null;
    }
  }

  updateJumbotronHeight() {
    let jumbotronHeight = document.getElementById('jumbotron').offsetHeight;
    this.setState({
      jumbotronHeight
    });
  }


  componentWillUnmount() {
    document.removeEventListener('scroll', this.navScrollToggleHandler);
    window.removeEventListener('orientationchange', this.updateJumbotronHeight);
  }


  render() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const { isPortrait, jumbotronHeight } = this.state;
    return (
      <div className="content-body">
        <Navigation 
          isMobile={isMobile}
        />
        <Jumbotron 
          jumbotronHeight={jumbotronHeight}
          isMobile={isMobile}
          isPortrait={isPortrait}
        />
        <section id="about" className="page" style={{zIndex: 1}}>
          ABOUT
        </section>
      </div>
    );
  }
}