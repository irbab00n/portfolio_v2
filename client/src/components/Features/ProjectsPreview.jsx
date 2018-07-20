import React from 'react';

export default class ProjectsPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
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
      <div id="selected-feature" className="about-full-ch about-3quart-cw">
        Projects
      </div>
    );
  }
}
