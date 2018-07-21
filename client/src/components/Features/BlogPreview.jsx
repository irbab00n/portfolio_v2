import React from 'react';

export default class BlogPreview extends React.Component {
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
      <div id="selected-feature" className={`about-${wrapperHeight}-ch about-${wrapperWidth}-cw blog-preview`}>
        Blog Preview
      </div>
    );
  }
}
