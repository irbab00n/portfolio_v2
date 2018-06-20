import React from 'react';

import mountain from '../../../public/mountain.png';
import cloudBackground from '../../../public/cloud_large_raw.png';
import leftImage from '../../../public/cloud_left_transition_medium.png';
import rightImage from '../../../public/cloud_right_transition_large.png';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translatePercent: 0
    };
  }

  componentDidMount() {
    let jumbotronHeight = document.getElementById('jumbotron').offsetHeight;
    document.addEventListener('scroll', (function() {
      let currentYOffset = window.pageYOffset;
      let translatePercent = (currentYOffset / jumbotronHeight) * 100;
      this.setState({
        translatePercent
      });
    }).bind(this));
  }

  render() {

    const { translatePercent } = this.state;

    return (

      <section id="jumbotron" className="page">
        <div className="jumbotron-images-wrapper page">
          <img className="mountain-image" src={mountain}/>
          <img className="right-image" src={rightImage} style={{transform: `translateX(${(translatePercent / 8) + '%'})`}}/>
          <img className="jumbotron-image-full-size" src={cloudBackground}/>
          <img className="left-image" src={leftImage} style={{transform: `translateX(${-(translatePercent / 4) + '%'})`}}/>
        </div>
      </section>

    );

  }
}

// 