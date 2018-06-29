import React from 'react';

import mountain from '../../../public/mountain-png-2.png';
import trees from '../../../public/trees.png';
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

  /**
    Params

      - image     <String>: Imported at the top of the file, passed in via variable reference inside interpolation
      - classes   <String/Array>: String shoudl be  consistant with normal className rules; If array, it will concat as a string with spaces
      - ratio     <Number>: Divides the current scroll percent; provides a smaller percentage curve for slower animations
      - xAdjust   <Number>: Number represents a percentage of transform.  Negative translates left, positive translates right
      - yAdjust   <Number>: Number represents a percentage of transform.  Negative translates up, positive translates down

    Purpose

      Construct an 'img' element, apply the classes, attach the source, and a calculated style object
      The calculated style object has both a transform X and Y translate using the passed in or default values

  */
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

    const { isMobile, isPortait } = this.props;

    return (

      <section id="jumbotron" className="page">
        <div className="jumbotron-images-wrapper page">
          <img className="mountain-image" src={mountain}/>
          <img className="trees-image" src={trees}/>
          {
            this.renderHorizontalTranslateImage(rightImage, 'right-image', 7, -20, -5)
          }
          <img className="jumbotron-image-full-size" src={cloudBackground}/>
          {
            this.renderHorizontalTranslateImage(leftImage, 'left-image', 3, 15, -30)
          }
        </div>
      </section>

    );

  }
}