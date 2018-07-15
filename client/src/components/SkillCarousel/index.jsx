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
  
  calculateXTranslate(index) {
    // divide 100 by 3, then multiply it by the index
    let cardSize = 100 / 3;
    let transformPercent = cardSize * index;
    return {transform: `translateX(${-transformPercent}%)`};
  }
  
  updateCarouselIndex(update) {
    let { index } = this.state;
    switch (update) {
      case 'inc':
        if (index === 3) {
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
        console.log(`updateCarouselIndex ran, but didn't receive a valid update command as its input`);
        break;
    }
  }


  render() {

    let { index } = this.state;

    console.log('current carousel index: ', index);

    return (
      <div className="about-container about-half-ch about-full-cw skill-carousel">
        <div className="about-half-ch about-full-cw skill-control-box">
          <div className="control" onClick={() => this.updateCarouselIndex('dec')}/>
          <div className="control" onClick={() => this.updateCarouselIndex('inc')}/>
        </div>
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
      </div>
    );
  }
}