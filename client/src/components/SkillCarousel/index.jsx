import React from 'react';
import SkillCard from './SkillCard';

import { skills } from './skills';

export default class SkillCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.calculateXTranslate = this.calculateXTranslate.bind(this);
    this.renderSkillsCarousel = this.renderSkillsCarousel.bind(this);
    this.updateCarouselIndex = this.updateCarouselIndex.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.index !== nextState.index;
  }
  
  /* calculateXTranslate info --
    Params:
      index <Number>: Used to calcuate the number of % sections to shift by
    Purpose:
      Uses the index as a multiplier for how many card-sized sections to translate the slider by
      index = 3 => transform = 100%
      index = 1 => transform = 33.3333%
  */
  calculateXTranslate(index) {
    let cardSize = 100 / 3;
    let transformPercent = cardSize * index;
    return {transform: `translateX(${-transformPercent}%)`};
  }

  renderSkillsCarousel(index) {
    let { isMobile, isPortrait } = this.props;
    // if not in mobile, return the desktop version

    if (isMobile) {
      if (isPortrait) {
        // if portrait, the following rules apply
        // the height of the skills should be 1/2 height
        // the width of each skill should be the full width
        // translating by index should translate by 100% each time
        // max index is the length of the skills - 1
      }
      // if in mobile and landscape
      // the height of the skills should be the full height
      // the width of each skill should be half width
      // translating bu index should translate by 50% each time
      // max index is the length of the skills - 2
    } 

    return (
      <div 
        className="about-container about-half-ch about-full-cw skill-slider"
        style={this.calculateXTranslate(index)}
      >
        {
          skills.map((skill, index) => {
            return (
              <SkillCard key={`skill-${index}`}skill={skill}/>
            );
          })
        }
      </div>
    );
  }
  
  /* updateCarouselIndex info --
    Params:
      update <String>: A command used to determine how to mutate the index in state
    Purpose:
      create a central updating function responsible for either increasing or decreasing the index
  */
  updateCarouselIndex(update) {
    let { index } = this.state;
    switch (update) {
      case 'inc':
        if (index === skills.length - 3) {
          return;
        }
        this.setState({index: index + 1});
        break;
      case 'dec':
        if (index === 0) {
          return;
        }
        this.setState({index: index - 1});
        break;
      default:
        // if neither command was supplied, do nothing
        console.log(`updateCarouselIndex ran, but didn't receive a valid update command as its input`);
        break;
    }
  }

  render() {

    let { index } = this.state;

    return (
      <div className="about-container about-half-ch about-full-cw skill-carousel">
        {
          this.renderSkillsCarousel(index)
        }
        <div className="about-half-ch about-full-cw skill-control-box">
          <div className="about-half-ch control control-left no-select" onClick={() => this.updateCarouselIndex('dec')}>❮</div>
          <div className="about-half-ch control control-right no-select" onClick={() => this.updateCarouselIndex('inc')}>❯</div>
        </div>
      </div>
    );
  }
}