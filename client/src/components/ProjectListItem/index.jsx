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
    let { number, size } = this.props;
    
    return (
      <div 
        className={`proj-${size}-cw proj-${size}-ch projects-list-item`}
        onMouseEnter={this.toggleHoveredState}
        onMouseLeave={this.toggleHoveredState}
      >
        {`list item ${number}`}
      </div>
    );
  }
};