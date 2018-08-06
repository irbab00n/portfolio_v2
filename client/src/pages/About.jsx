import React from 'react';

import toggleNavElements from '../lib/toggleNavElements';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    toggleNavElements();
  }

  render() {
    return (

      <div className="page">
        About Page
      </div>

    );
  }
}