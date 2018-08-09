import React from 'react';

export default class ProjectListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    let { number, size } = this.props;

    return (
      <div className={`proj-${size}-cw proj-${size}-ch projects-list-item`}>
        {`list item ${number}`}
      </div>
    );
  }


};