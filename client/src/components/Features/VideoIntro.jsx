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

    const { isMobile, isPortrait } = this.props;

    let wrapperHeight = 'full'; // default size is full height
    let wrapperWidth = '3quart'; // default width is 3 quarter width

    let videoHeight = '27vw';
    let videoWidth = '48vw';

    isMobile && isPortrait ? 
      (
        wrapperHeight = 'half', 
        wrapperWidth = 'full', 
        videoHeight = '45vw',
        videoWidth = '80vw'
      ) : 
      null;


    return (
      <div id="selected-feature" className={`about-${wrapperHeight}-ch about-${wrapperWidth}-cw video-intro`}>
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
            height={videoHeight}
            width={videoWidth}
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
