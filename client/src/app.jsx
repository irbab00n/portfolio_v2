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

      <div className="content-body">

        <Navigation />

        <div className="navigation-gutter"/>

        <div style={{height: '300vh', width: '98vw', margin: '0 1vw'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin orci at malesuada fringilla. Etiam tincidunt id tellus eu feugiat. Sed auctor tempor massa eget efficitur. Praesent eu metus malesuada, iaculis magna in, malesuada libero. Vivamus tincidunt venenatis tempus. Donec eu tincidunt velit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin orci at malesuada fringilla. Etiam tincidunt id tellus eu feugiat. Sed auctor tempor massa eget efficitur. Praesent eu metus malesuada, iaculis magna in, malesuada libero. Vivamus tincidunt venenatis tempus. Donec eu tincidunt velit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin orci at malesuada fringilla. Etiam tincidunt id tellus eu feugiat. Sed auctor tempor massa eget efficitur. Praesent eu metus malesuada, iaculis magna in, malesuada libero. Vivamus tincidunt venenatis tempus. Donec eu tincidunt velit.
        </div>

      </div>

    );

  }
}