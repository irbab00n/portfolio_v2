import React from 'react';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotronHeight: 0
    };
    this.navScrollToggleHandler = this.navScrollToggleHandler.bind(this);
  }

  componentDidMount() {
    let sections = document.getElementsByTagName('section');
    document.addEventListener('scroll', this.navScrollToggleHandler);
    this.setState({
      jumbotronHeight: sections[0].offsetHeight
    });
  }

  navScrollToggleHandler() {
    // get the current y offset
    let { jumbotronHeight } = this.state;
    let currentYOffset = window.pageYOffset;

    // get the navigation component
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



  render() {

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const { jumbotronHeight } = this.state;

    return (

      <div className="content-body">

        <Navigation 
          isMobile={isMobile}
        />

        <Jumbotron 
          jumbotronHeight={jumbotronHeight}
        />

        <section id="about" className="page" style={{zIndex: 1}}>
          ABOUT
        </section>

      </div>

    );

  }
}
