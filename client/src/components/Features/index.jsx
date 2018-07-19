import React from 'react';
import SkillCarousel from '../SkillCarousel';
import VideoIntro from './VideoIntro';

import shallowEqual from '../../lib/shallowEqual';

export default class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }

  render() {

    console.log('rendering');
    return (
      <section id="about">
        <div id="about-content">
          <SkillCarousel />
          <VideoIntro />
          <div className="about-container about-full-ch about-quarter-cw feature-list">
            Right
          </div>
        </div>
      </section>
    );
  }
}

// <span className="wistia_embed wistia_async_gv3h2gdxoe popover=true popoverAnimateThumbnail=true" style={{display:'inline-block',height:'36vh',position:'relative',width:'64vh'}}>&nbsp;</span> 