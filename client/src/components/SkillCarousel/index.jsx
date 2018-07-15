import React from 'react';
import SkillCard from './SkillCard';

import { skills } from './skills';

export default class SkillCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.updateCarouselIndex = this.updateCarouselIndex.bind(this);
  }

  updateCarouselIndex(update) {
    let { index } = this.state;
    switch (update) {
      case 'inc':
        console.log('increase index!');
        if (index === 3) {
          console.log('index is too high, doing nothing');
          return;
        }
        this.setState({index: index + 1});
        break;
      case 'dec':
        console.log('decrease index!');
        if (index === 0) {
          console.log('index is at the lowest possible, doing nothing');
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
          <div className="control" onMouseEnter={() => this.updateCarouselIndex('dec')}/>
          <div className="control" onMouseEnter={() => this.updateCarouselIndex('inc')}/>
        </div>
        <div className="about-container about-half-ch about-full-cw skill-slider">
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