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
      <div className="about-container about-full-ch about-3quart-cw video-intro">
        <div id="loading" className="video-intro video-intro-loading video-intro-loading-active">
          <div className="spinning-loader"/>
        </div>
        <ReactPlayer
          id="intro-video"
          className="video video-loading"
          url="https://cosbyts.wistia.com/medias/gv3h2gdxoe"
          height="36vw"
          width="64vw"
          onReady={this.toggleVideoLoading}
          onBuffer={() => console.log('buffer is running')}
        />
      </div>
    );
  }
}

// The ReactPlayer has several callback props that we can utilize to create functionality

// onReady -- called when media is loaded, we can use this to be able to toggle off the loading classes from the video and loading element