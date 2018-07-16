import React from 'react';

const config = {
  block: 'start',
  inline: 'nearest',
  behavior: 'smooth'
};

const DesktopNav = (props) => (

  <div className="navigation-nav-wrapper">
    <nav>
      <a className="navigation-nav-link" href="/about">About Me</a>
      <a className="navigation-nav-link" href="/projects">Projects</a>
      <a className="navigation-nav-link" href="/blog">Blog</a>
      <a className="navigation-nav-link" href="">Resume</a>
    </nav>
  </div>

);

export default DesktopNav;