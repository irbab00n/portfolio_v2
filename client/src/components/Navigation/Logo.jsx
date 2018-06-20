import React from 'react';

const config = {
  block: 'start',
  inline: 'nearest',
  behavior: 'smooth'
};

const Logo = (props) => (

  <div className="navigation-logo-wrapper">
    <div className="navigation-logo-gradient"/>
    <a className="navigation-logo" onClick={() => {
      document.getElementById('jumbotron').scrollIntoView(config)
    }}></a>
  </div>

);

export default Logo;