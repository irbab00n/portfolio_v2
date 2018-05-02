import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let wrapper = document.getElementsByClassName('mobile-nav-toggle');
    wrapper[0].classList.toggle('is-active');
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

      </section>

    );

  }
}