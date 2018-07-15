import React from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetPosition: null
    };
    this.handleLinkClick = this.handleLinkClick.bind(this);
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

        <Logo />

        <DesktopNav />

        <MobileNav isMobile={isMobile} />

        <div className="mobile-nav-menu">
          <div className="mobile-nav-content">
            <ul>
              <li>
                <a href="/">Link 1</a>
              </li>
              <li>
                <a href="/">Link 2</a>
              </li>
              <li>
                <a href="/">Link 3</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

    );

  }
}