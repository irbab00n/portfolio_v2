import React from 'react';

export default class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      imageIndex: 0,
      intervalId: null
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.incrementImageIndex = this.incrementImageIndex.bind(this);
  }

  
  handleMouseEnter() {
    let intervalId = setInterval(this.incrementImageIndex, 1250);
    this.setState({
      hovered: true,
      intervalId
    });
  }
  
  handleMouseLeave() {
    clearInterval(this.state.intervalId);
    this.setState({
      hovered: false,
      imageIndex: 0,
      intervalId: null
    });
  }

  incrementImageIndex() {
    let { imageIndex } = this.state;
    let pictureLength = this.props.data.pictures.length;

    let nextIndex = imageIndex + 1;  // default: increment by 1

    // if the nextIndex is the length of the pictures array
    if (nextIndex === pictureLength) {
      // set the next Index back to 0
      nextIndex = 0;
    }

    this.setState({
      imageIndex: nextIndex
    });
  }

  render() {
    let { hovered, imageIndex } = this.state;
    let { data, size } = this.props;

    
    return (
      <div 
        className={`proj-${size}-cw proj-${size}-ch projects-list-item`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div 
          className={`project-images-wrapper ${hovered ? 'hovered' : ''}`}
          style={
            {
              background: `url(${data.pictures[imageIndex].link})`
            }
          }
        >
        </div>
        
        <div 
          className={`project-details-wrapper ${hovered ? 'hovered' : ''}`}
        >
          <div className={`project-details-title-${size} ${hovered ? 'hovered' : ''}`}>{data.title}</div>
          <div className={`project-details-desc-${size} ${hovered ? 'hovered' : ''}`}>
            <div className={`details-desc-wrapper-${size} ${hovered ? 'hovered' : ''}`}>
              Description wrapper
            </div>
          </div>
        </div>
      </div>
    );
  }
};