import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, hashHistory } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './pages/Home';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: window.innerHeight > window.innerWidth,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      jumbotronHeight: 0,
    };
    this.updateViewInformation = this.updateViewInformation.bind(this);
  }

  componentDidMount() {
    window.addEventListener('orientationchange', () => setTimeout(this.updateViewInformation, 200));
    this.updateViewInformation();
  }

  updateViewInformation() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let isPortrait = window.innerHeight > window.innerWidth;
    this.setState({
      isMobile,
      isPortrait
    });
  }

  componentWillUnmount() {
    window.removeEventListener('orientationchange', () => setTimeout(this.updateViewInformation, 200));
  }

  render() {

    /* 
      When refactoring into React Router, need to be aware of what logic needs to be handled
      on a global level, such as the current Y offset of the page, whether or not the view is mobile
      and we need a flag in JavaScript.
    */
    const { isPortrait, isMobile, jumbotronHeight } = this.state;

    return (
      <div className="content-body">
        <Navigation 
          isMobile={isMobile}
        />

        <Router history={hashHistory}>
          <Switch>
            <Route exact path="/" render={ () => <Home isMobile={isMobile} isPortrait={isPortrait}/> }/>
          </Switch>
        </Router>
      </div>
    );
  }
}