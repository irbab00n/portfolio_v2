import React from 'react';

export default class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.toggleHoveredState = this.toggleHoveredState.bind(this);
  }

  /*
    Toggles the hovered boolean in the state to the opposite of what it is currently set to
  */
  toggleHoveredState() {
    console.log('toggling the hovered state');
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render() {
    let { hovered } = this.state;
    let { data, size } = this.props;
    
    return (
      <div 
        className={`proj-${size}-cw proj-${size}-ch projects-list-item`}
        onMouseEnter={this.toggleHoveredState}
        onMouseLeave={this.toggleHoveredState}
      >
        <div 
          className={`project-images-wrapper ${hovered ? 'hovered' : ''}`}
          style={
            {
              background: `url(${data.pictures[0].link})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }
          }
        >
        </div>
        
        <div 
          className={`project-details-wrapper ${hovered ? 'hovered' : ''}`}
        >
          Details
        </div>
      </div>
    );
  }
};