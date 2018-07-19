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
    this.updateCurrentFeature = this.updateCurrentFeature.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }

  renderFeature(feature) {
    switch (feature) {
      case 'video':
        return <VideoIntro />;
        break;
    }
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
            Right
          </div>
        </div>
      </section>
    );
  }
}

// <span className="wistia_embed wistia_async_gv3h2gdxoe popover=true popoverAnimateThumbnail=true" style={{display:'inline-block',height:'36vh',position:'relative',width:'64vh'}}>&nbsp;</span> 