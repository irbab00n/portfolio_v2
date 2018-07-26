import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, hashHistory } from 'react-router-dom';

import Navigation from './components/Navigation';

import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Projects from './pages/Projects';

import './sass/main.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: window.innerHeight > window.innerWidth,
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
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

    const { isPortrait, isMobile } = this.state;

    return (
      <div className="content-body">
        <Navigation 
          isMobile={isMobile}
        />
        <Router history={hashHistory}>
          <Switch>
            <Route exact path="/"   render={() => <Home isMobile={isMobile} isPortrait={isPortrait}/>}/>
            <Route path="/about"    render={() => <About isMobile={isMobile} isPortrait={isPortrait}/>}/>
            <Route path="/blog"     render={() => <Blog isMobile={isMobile} isPortrait={isPortrait}/>}/>
            <Route path="/projects" render={() => <Projects isMobile={isMobile} isPortrait={isPortrait}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}