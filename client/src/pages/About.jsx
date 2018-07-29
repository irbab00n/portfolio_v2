import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let navContainer = document.getElementsByClassName('navigation')[0];
    let navEl = document.getElementsByTagName('nav')[0];
    let containerIsToggled = navContainer.classList.contains('toggled');
    let elIsToggled = navEl.classList.contains('toggled');
    // if the navContainer is toggled, do nothing, otherwise, toggle it
    containerIsToggled ? null : navContainer.classList.toggle('toggled');
    elIsToggled ? null : navEl.classList.toggle('toggled');
  }

  render() {
    return (

      <div className="page">
        About Page
      </div>

    );
  }
}