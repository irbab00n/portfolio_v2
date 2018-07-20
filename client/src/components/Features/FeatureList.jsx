import React from 'react';

export default class FeatureList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderListItem(featureName, selectedFeature, itemTitle) {
    // needs to know if the item is the currently selected feature-list
    let { isMobile, updateFunction } = this.props;
    let isSelected = featureName === selectedFeature;

    if (isMobile) {
      return (
        <div className={`feature-list-item ${isSelected ? 'selected' : ''}`} onTouchStart={() => updateFunction(featureName)}>
          <center className="list-item-title">{itemTitle}</center>
        </div>
      );
    } else {
      return (
        <div className={`feature-list-item ${isSelected ? 'selected' : ''}`} onClick={() => updateFunction(featureName)}>
          <center className="list-item-title">{itemTitle}</center>
        </div>
      );
    }
  }

  render() {

    let { isMobile, isPortrait, currentFeature } = this.props;

    let wrapperHeight = 'full'; // full by default
    let wrapperWidth = 'quarter'; // quarter by default

    isMobile && isPortrait ?
      (
        wrapperHeight = 'quarter',
        wrapperWidth = 'full'
      ) : 
      null;

    return (

      <div className={`about-container about-${wrapperHeight}-ch about-${wrapperWidth}-cw feature-list`}>
        {
          this.renderListItem('video', currentFeature, 'Introductions')
        }
        {
          this.renderListItem('projects', currentFeature, 'See what I\'ve been working on')
        }
        {
          this.renderListItem('blog', currentFeature, 'Check out my latest blog post')
        }
      </div>

    );
  }
}