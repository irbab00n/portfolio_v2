import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let html = document.getElementsByTagName('html')[0];
    let wrapper = document.getElementsByClassName('mobile-nav-toggle')[0];
    let menu = document.getElementsByClassName('mobile-nav-menu')[0];

    html.classList.toggle('no-scroll');
    wrapper.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  render() {

    return (

      <section className="navigation">

        <div className="navigation-logo-wrapper">
          <a className="navigation-logo" href="/"></a>
        </div>

        <div className="navigation-nav-wrapper">
          <nav>
            <a className="navigation-nav-link" href="">Link 1</a>
            <a className="navigation-nav-link" href="">Link 2</a>
            <a className="navigation-nav-link" href="">Link 3</a>
            <a className="navigation-nav-link" href="">Link 4</a>
          </nav>
        </div>

        <div className="mobile-nav-wrapper">
          <a className="mobile-nav-toggle" onClick={(e) => this.handleClick(e)}>
            <span></span>
          </a>
        </div>

        <div className="mobile-nav-menu">
          <div className="mobile-nav-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin orci at malesuada fringilla. Etiam tincidunt id tellus eu feugiat. Sed auctor tempor massa eget efficitur. Praesent eu metus malesuada, iaculis magna in, malesuada libero. Vivamus tincidunt venenatis tempus. Donec eu tincidunt velit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin orci at malesuada fringilla. Etiam tincidunt id tellus eu feugiat. Sed auctor tempor massa eget efficitur. Praesent eu metus malesuada, iaculis magna in, malesuada libero. Vivamus tincidunt venenatis tempus. Donec eu tincidunt velit.</p>
          </div>
        </div>

      </section>

    );

  }
}