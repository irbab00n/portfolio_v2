import React from 'react';

export default class MobileNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetPosition: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // get the HTML to prevent scroll
    let html = document.getElementsByTagName('html')[0];
    // get the navigation container to toggle on the background
    let navContainer = document.getElementsByClassName('navigation')[0];
    // get the mobile nav toggle button to toggle active class
    let mobileNavToggle = document.getElementsByClassName('mobile-nav-toggle')[0];
    // get the mobile nav menu to toggle active class
    let mobileNavMenu = document.getElementsByClassName('mobile-nav-menu')[0];
    let target = document.getElementById('jumbotron-scroll-target');

    // save the current Y offset of the page
    // let currentOffset = window.pageYOffset;

    // Toggle container classes
    navContainer.classList.contains('toggled') ? null : navContainer.classList.toggle('toggled'); // Toggles the class that toggles on the white background for the nav bar
    mobileNavToggle.classList.toggle('is-active'); // Triggers the hamburger -> X transition
    mobileNavMenu.classList.toggle('is-active'); // Toggles the color and size animations for the menu
    target.classList.toggle('toggled');

    // lock the scroll on the background
    // html.classList.toggle('no-scroll'); // Prevents background content from being moved while menu is active

    // if we have an offsetPosition stored in the state
    // if (this.state.offsetPosition !== null) {
    //   // set the y offset to the offsetPosition in state
    //   window.scrollTo(0, this.state.offsetPosition);
    //   // clear the offsetPosition from the state
    //   this.setState({offsetPosition: null});
    // } else {
    //   // set the offsetPosition to tshe currentOffset
    //   this.setState({offsetPosition: currentOffset});
    // }
  }

  render() {
    return (
      <div className="mobile-nav-wrapper">
        <a 
          className="mobile-nav-toggle"
          onTouchStart={(e) => this.handleClick(e)}
        >
          <span></span>
        </a>
      </div>
    );
  }
}