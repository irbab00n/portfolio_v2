import React from 'react';

const scrollConfig = {
  block: 'start',
  inline: 'nearest',
  behavior: 'smooth'
};

const Logo = (props) => (

  <div className="navigation-logo-wrapper">
    <div className="navigation-logo-gradient"/>
    <a 
      className="navigation-logo"
      onClick={() => {
        document.getElementById('jumbotron').scrollIntoView(scrollConfig)
      }}
    />
  </div>

);

export default Logo;