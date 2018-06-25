import React from 'react';

import mountain from '../../../public/mountain-png-2.png';
import trees from '../../../public/trees.png';
import bird from '../../../public/bird.gif';
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
    // by setting the state locally within this function on a scroll listener causes the entire
    this.setState({
      scrollPercent: (currentYOffset / jumbotronHeight) * 100
    });
  }

  renderHorizontalTranslateImage(image, classes, ratio = 1, xAdjust = 0, yAdjust = 0) {

    if (Array.isArray(classes)) {
      classes = classes.join(' ');
    }

    let { scrollPercent } = this.state;
    let transformPercent = scrollPercent / ratio + xAdjust;
    let style = {
      transform: `translateX(${transformPercent}%) translateY(${yAdjust}%)`
    };
    return (
      <img className={classes} src={image} style={style}/>
    );
  }

  updatePortraitFlag() {
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
          <img className="trees-image" src={trees}/>
          {
            this.renderHorizontalTranslateImage(rightImage, 'right-image', 7, -20, 5)
          }
          <img className="jumbotron-image-full-size" src={cloudBackground}/>
          {
            this.renderHorizontalTranslateImage(leftImage, 'left-image', 2, 15, -30)
          }
        </div>
      </section>

    );

  }
}

// 