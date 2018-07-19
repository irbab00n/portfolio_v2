import React from 'react';
import ReactPlayer from 'react-player';

export default class VideoIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRender: this.props.isMounted
    };
    this.toggleVideoLoading = this.toggleVideoLoading.bind(this);
  }

  componentDidMount() {
    console.log('mounting the video');
    let introVideoEl = document.getElementsByClassName('video-intro')[0];
    // toggle off the loading classes from the elements we need to.
    setTimeout(() => introVideoEl.classList.toggle('loading'), 100);
  }

  toggleVideoLoading() {
    let loading = document.getElementById('loading');
    let video = document.getElementById('intro-video');
    // when the video is loading, we want the loading to be active
    // when the video loads, we want to toggle on the video
    loading.classList.toggle('video-intro-loading-active');
    video.classList.toggle('video-loading');
  }

  componentWillUnmount() {
    let introVideoEl = document.getElementsByClassName('video-intro')[0];
    introVideoEl.classList.toggle('loading');
  }

  render() {
    return (
      <div id="selected-feature" className="about-full-ch about-3quart-cw video-intro loading">
        <h1 className="video-title">
          Welcome to my portfolio
        </h1>
        <div className="video-wrapper">
          <div id="loading" className="video-intro-loading video-intro-loading-active">
            <div className="spinning-loader"/>
          </div>
          <ReactPlayer
            id="intro-video"
            className="video video-loading"
            url="https://cosbyts.wistia.com/medias/gv3h2gdxoe"
            height="27vw"
            width="48vw"
            onReady={this.toggleVideoLoading}
          />
        </div>
        <div className="">
          To learn more about me, go to this link
        </div>
      </div>
    );
  }
}
