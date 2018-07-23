import React from 'react';

import { particles } from '../../lib/projects';

export default class ProjectsPreview extends React.Component {
  constructor(props) {
    super(props);
    this.renderViewForDevice = this.renderViewForDevice.bind(this);
  }

  componentDidMount() {
  }

  renderViewForDevice(isMobile) {
    // if (isMobile) {
      // return the full-sized featured project only
      return (
        <div className="preview-project-wrapper">
          <img className="mobile-project-image" src={particles.pictures[0].link}/>
          <div className="mobile-info-wrapper">
            <h1 className="mobile-project-title">
              {`My latest project: ${particles.title}`}
            </h1>

            <div className="mobile-project-desc">
              If you want to see more in detail, click here!
            </div>
          </div>
        </div>
      );
    // } else {
    //   // show the featured project, and a 
    //   return (
    //     <div className="preview-project-wrapper">
    //       Desktop Projects
    //     </div>
    //   );
    // }
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
        {
          this.renderViewForDevice(isMobile)
        }
      </div>
    );
  }
}
