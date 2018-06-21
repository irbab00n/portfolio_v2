import React from 'react';

import mountain from '../../../public/mountain.png';
import cloudBackground from '../../../public/cloud_large_raw.png';
import leftImage from '../../../public/cloud_left_transition_medium.png';
import rightImage from '../../../public/cloud_right_transition_large.png';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: false,
      scrollPercent: 0
    };
    this.calculatePercent = this.calculatePercent.bind(this);
    this.renderHorizontalTranslateImage = this.renderHorizontalTranslateImage.bind(this);
    this.updatePortraitFlag = this.updatePortraitFlag.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.calculatePercent);
    window.addEventListener('orientationchange', this.updatePortraitFlag);
  }

  calculatePercent() {
    let { jumbotronHeight } = this.props;
    let currentYOffset = window.pageYOffset;
    this.setState({
      scrollPercent: (currentYOffset / jumbotronHeight) * 100
    });
  }

  renderHorizontalTranslateImage(classes, image, percentDivider = 1) {
    let { scrollPercent } = this.state;
    let transformPercent = scrollPercent / percentDivider;
    let style = {
      transform: `translateX(${transformPercent}%)`
    };
    return (
      <img className={classes} src={image} style={style}/>
    );
  }

  updatePortraitFlag() {
    console.log('orientation changed');
    this.setState({
      isPortrait: window.matchMedia("(orientation: portrait)").matches
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.calculatePercent);
    window.removeEventListener('orientationchange', this.updatePortraitFlag);
  }

  render() {

    return (

      <section id="jumbotron" className="page">
        <div className="jumbotron-images-wrapper page">
          <img className="mountain-image" src={mountain}/>
          {
            this.renderHorizontalTranslateImage('right-image', rightImage, 7)
          }
          <img className="jumbotron-image-full-size" src={cloudBackground}/>
          {
            this.renderHorizontalTranslateImage('left-image', leftImage, 4)
          }
        </div>
      </section>

    );

  }
}

// 