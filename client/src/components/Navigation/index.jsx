import React from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import shallowEqual from '../../lib/shallowEqual';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.state, nextState);
  }

  handleLinkClick(link) {
    let config = {
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    };

    switch(link) {
      case 'home':
        document.getElementById('jumbotron').scrollIntoView(config);
        break;
      case 'about':
        document.getElementById('about').scrollIntoView(config);
    }
  }

  render() {

    const { isMobile } = this.props;

    return (

      <div className="navigation">

        <Logo 
          isMobile={isMobile}
        />

        <DesktopNav />

        <MobileNav isMobile={isMobile} />

        <div className="mobile-nav-menu">
          <div className="mobile-nav-content">
            <ul>
              <li>
                <a href="/about">About Me</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

    );

  }
}