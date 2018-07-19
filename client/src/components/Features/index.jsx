import React from 'react';
import SkillCarousel from '../SkillCarousel';
import VideoIntro from './VideoIntro';

import shallowEqual from '../../lib/shallowEqual';

export default class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFeature: 'video'
    };
    this.renderFeature = this.renderFeature.bind(this);
    this.toggleLoadingThenUpdate = this.toggleLoadingThenUpdate.bind(this);
    this.updateCurrentFeature = this.updateCurrentFeature.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldRender = false;
    shallowEqual(this.props, nextProps) ? null : shouldRender = true;
    shallowEqual(this.state, nextState) ? null : shouldRender = true;
    return shouldRender;
  }

  renderFeature(feature) {
    switch (feature) {
      case 'video':
        return <VideoIntro />;
        break;
      case 'blog':
        return (<div id="selected-feature" className="about-full-ch about-3quart-cw">Blog</div>);
        break;
      case 'projects':
        return (<div id="selected-feature" className="about-full-ch about-3quart-cw">Projects</div>);
        break;
    }
  }

  toggleLoadingThenUpdate(delay, feature) {
    if (feature === this.state.currentFeature) {
      return;
    }
    let selectedFeature = document.getElementById('selected-feature');
    let loading = selectedFeature.classList.contains('loading');
    loading ? null : selectedFeature.classList.toggle('loading');
    setTimeout(() => this.updateCurrentFeature(feature), delay);
  }

  updateCurrentFeature(feature) {
    if (typeof feature === 'string') {
      this.setState({
        currentFeature: feature
      });
    }
  }

  render() {

    const { currentFeature } = this.state;
    const { isMobile, isPortrait } = this.props;

    return (
      <section id="about">
        <div id="about-content">
          <SkillCarousel 
            isMobile={isMobile}
            isPortrait={isPortrait}
          />
          {
            this.renderFeature(currentFeature)
          }
          <div className="about-container about-full-ch about-quarter-cw feature-list">
            <div className="feature-list-item" onClick={() => this.toggleLoadingThenUpdate(400, 'video')}>
              About Me
            </div>
            <div className="feature-list-item" onClick={() => this.toggleLoadingThenUpdate(400, 'projects')}>
              Projects
            </div>
            <div className="feature-list-item" onClick={() => this.toggleLoadingThenUpdate(400, 'blog')}>
              Blog
            </div>
          </div>
        </div>
      </section>
    );
  }
}