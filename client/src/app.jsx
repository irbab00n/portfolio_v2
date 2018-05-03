import React from 'react';
import Navigation from './components/Navigation/index.jsx';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    return (

      <div className="content-body">

        <Navigation 
          isMobile={isMobile}
        />

        <div className="navigation-gutter"/>

        <div style={{height: '300vh', width: '98vw', margin: '0 1vw'}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin orci at malesuada fringilla. Etiam tincidunt id tellus eu feugiat. Sed auctor tempor massa eget efficitur. Praesent eu metus malesuada, iaculis magna in, malesuada libero. Vivamus tincidunt venenatis tempus. Donec eu tincidunt velit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin orci at malesuada fringilla. Etiam tincidunt id tellus eu feugiat. Sed auctor tempor massa eget efficitur. Praesent eu metus malesuada, iaculis magna in, malesuada libero. Vivamus tincidunt venenatis tempus. Donec eu tincidunt velit.</p>
        </div>

      </div>

    );

  }
}