import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let nav = document.getElementsByClassName('navigation')[0];
    let isToggled = nav.classList.contains('toggled');
    // if the nav is toggled, do nothing, otherwise, toggle it
    isToggled ? null : nav.classList.toggle('toggled');
  }

  render() {
    return (

      <div className="page">
        About Page
      </div>

    );
  }
}