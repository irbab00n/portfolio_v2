import React from 'react';
import Control from './Control';
import SkillCard from './SkillCard'

import { skills } from './skills';

import shallowEqual from '../../lib/shallowEqual';

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

  componentDidMount() {
    window.addEventListener('orientationchange', () => this.setState({index: 0}));
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = false;
    shallowEqual(this.props, nextProps) ? null : shouldUpdate = true;
    this.state.index !== nextState.index ? shouldUpdate = true : null;
    return shouldUpdate;
  }
  
  /* calculateXTranslate info --
    Params:
      index <Number>: Used to calcuate the number of % sections to shift by
    Purpose:
      Uses the index as a multiplier for how many card-sized sections to translate the slider by
      index = 3 => transform = 100%
      index = 1 => transform = 33.3333%
  */
  calculateXTranslate(index, sizeDivision) {
    let cardSize = 100 / sizeDivision;
    let transformPercent = cardSize * index;
    return {transform: `translateX(${-transformPercent}%)`};
  }

  renderSkillsCarousel(index) {
    let { isMobile, isPortrait } = this.props;

    let contentHeight = 'half'; // default is half content height
    let sizeDivision = 3; // default is 3

    isMobile ? (contentHeight = 'full', sizeDivision = 2) : null;
    isPortrait ? (contentHeight = 'half', sizeDivision = 1) : null;
    let classList = `about-container about-${contentHeight}-ch about-full-cw skill-slider`;

    return (
      <div 
        className={classList}
        style={this.calculateXTranslate(index, sizeDivision)}
      >
        {
          skills.map((skill, index) => {
            return (
              <SkillCard 
                isMobile={isMobile}
                isPortrait={isPortrait}
                key={`skill-${index}`}
                skill={skill}
              />
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
  updateCarouselIndex(e, update) {
    e.preventDefault();
    let { index } = this.state;
    let { isMobile, isPortrait } = this.props;

    let limitValue = 3;

    isMobile ? limitValue = 2 : null;
    isPortrait ? limitValue = 1 : null;

    switch (update) {
      case 'inc':
        if (index === skills.length - limitValue) {
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

  componentWillUnmount() {
    window.removeEventListener('orientationchange', () => this.setState({index: 0}));
  }

  render() {

    let { index } = this.state;
    let { isMobile, isPortrait } = this.props;

    let height = 'half';
    isMobile ? height = 'full' : null;
    isPortrait ? height = 'half' : null;

    return (
      <div className={`about-container about-${height}-ch about-full-cw skill-carousel`}>
        {
          this.renderSkillsCarousel(index)
        }
        <div className={`about-${height}-ch about-full-cw skill-control-box`}>
          <Control
            isMobile={isMobile} 
            height={height}
            direction={'left'}
            updateFunction={this.updateCarouselIndex}
          />          
          <Control
            isMobile={isMobile} 
            height={height}
            direction={'right'}
            updateFunction={this.updateCarouselIndex}
          />
        </div>
      </div>
    );
  }
}