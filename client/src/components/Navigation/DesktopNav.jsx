import React from 'react';

const config = {
  block: 'start',
  inline: 'nearest',
  behavior: 'smooth'
};

const DesktopNav = (props) => (

  <div className="navigation-nav-wrapper">
    <nav>
      <a className="navigation-nav-link" onClick={() => {
        document.getElementById('about').scrollIntoView(config)
      }}>Link 1</a>
      <a className="navigation-nav-link" href="">Link 2</a>
      <a className="navigation-nav-link" href="">Link 3</a>
      <a className="navigation-nav-link" href="">Link 4</a>
    </nav>
  </div>

);

export default DesktopNav;