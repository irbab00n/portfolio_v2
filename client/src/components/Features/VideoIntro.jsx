import React from 'react';
import ReactPlayer from 'react-player';

export default class VideoIntro extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVideoLoading = this.toggleVideoLoading.bind(this);
  }

  toggleVideoLoading() {
    let loading = document.getElementById('loading');
    let video = document.getElementById('intro-video');
    // when the video is loading, we want the loading to be active
    // when the video loads, we want to toggle on the video
    loading.classList.toggle('video-intro-loading-active');
    video.classList.toggle('video-loading');
  }

  render() {
    return (
      <div className="about-full-ch about-3quart-cw video-intro">
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
