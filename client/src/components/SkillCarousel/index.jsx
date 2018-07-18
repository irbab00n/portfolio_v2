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
        <div className="about-half-ch about-full-cw skill-control-box">
          <div className="about-half-ch control control-left no-select" onClick={() => this.updateCarouselIndex('dec')}>❮</div>
          <div className="about-half-ch control control-right no-select" onClick={() => this.updateCarouselIndex('inc')}>❯</div>
        </div>
      </div>
    );
  }
}