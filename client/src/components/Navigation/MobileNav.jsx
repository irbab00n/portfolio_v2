import React from 'react';
import ReactDOM from 'react-dom';

export default class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetPosition: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('touchstart', this.handleClick, {passive: false});
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('touchstart', this.handleClick);
  }

  handleClick(e) {
    e.preventDefault();
    // get the navigation container to toggle on the background
    let navContainer = document.getElementsByClassName('navigation')[0];
    // get the mobile nav toggle button to toggle active class
    let mobileNavToggle = document.getElementsByClassName('mobile-nav-toggle')[0];
    // get the mobile nav menu to toggle active class
    let mobileNavMenu = document.getElementsByClassName('mobile-nav-menu')[0];
    // get the jumbotron scroll target to toggle off 
    let target = document.getElementById('jumbotron-scroll-target');

    // Toggle container classes
    navContainer.classList.contains('toggled') ? null : navContainer.classList.toggle('toggled'); // Toggles the class that toggles on the white background for the nav bar
    mobileNavToggle.classList.toggle('is-active'); // Triggers the hamburger -> X transition
    mobileNavMenu.classList.toggle('is-active'); // Toggles the color and size animations for the menu
    // if the general navigation container is already toggled
    navContainer.classList.contains('toggled') ?
      // check to make sure the target is toggled
      (
        // if the target is already toggled
        target.classList.contains('toggled') ?
          // do nothing
          null :
          // otherwise, toggle it
          target.classList.toggle('toggled')
      ) :
      // otherwise, do nothing
      null;
  }

  render() {
    return (
      <div className="mobile-nav-wrapper">
        <a 
          className="mobile-nav-toggle"
        >
          <span></span>
        </a>
      </div>
    );
  }
}