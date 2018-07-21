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

    isMobile && isPortrait ? 
      (
        wrapperHeight = 'half', 
        wrapperWidth = 'full'
      ) : 
      null;
      
    return (
      <div id="selected-feature" className={`about-${wrapperHeight}-ch about-${wrapperWidth}-cw projects-preview`}>
        <div className="featured-project-wrapper">
          Featured Project
        </div>
        <div className="more-projects-wrapper">
          More Projects
        </div>
      </div>
    );
  }
}
