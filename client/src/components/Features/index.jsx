import React from 'react';
import SkillCarousel from '../SkillCarousel';
import FeatureList from './FeatureList';
import BlogPreview from './BlogPreview';
import ProjectsPreview from './ProjectsPreview';
import VideoIntro from './VideoIntro';

import shallowEqual from '../../lib/shallowEqual';

export default class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFeature: 'video'
    };
    this.renderFeature = this.renderFeature.bind(this);
    // this.toggleLoadingThenUpdate = this.toggleLoadingThenUpdate.bind(this);
    this.updateCurrentFeature = this.updateCurrentFeature.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldRender = false;
    shallowEqual(this.props, nextProps) ? null : shouldRender = true;
    shallowEqual(this.state, nextState) ? null : shouldRender = true;
    return shouldRender;
  }

  renderFeature(feature, isMobile, isPortrait) {
    switch (feature) {
      case 'video':
        return (
          <VideoIntro 
            isMobile={isMobile}
            isPortrait={isPortrait}
          />
        );
        break;
      case 'blog':
        return <BlogPreview />;
        break;
      case 'projects':
        return <ProjectsPreview />;
        break;
    }
  }

  // toggleLoadingThenUpdate(delay, feature) {
  //   if (feature === this.state.currentFeature) {
  //     return;
  //   }
  //   let selectedFeature = document.getElementById('selected-feature');
  //   let loading = selectedFeature.classList.contains('loading');
  //   loading ? null : selectedFeature.classList.toggle('loading');
  //   setTimeout(() => this.updateCurrentFeature(feature), delay);
  // }

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
            this.renderFeature(currentFeature, isMobile, isPortrait)
          }
          <FeatureList
            currentFeature={currentFeature}
            isMobile={isMobile}
            isPortrait={isPortrait}
            updateFunction={this.updateCurrentFeature}
          />
        </div>
      </section>
    );
  }
}