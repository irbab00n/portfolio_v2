import React from 'react';
import Navigation from './components/Navigation/index.jsx';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div>

        <Navigation />

      </div>

    );

  }
}