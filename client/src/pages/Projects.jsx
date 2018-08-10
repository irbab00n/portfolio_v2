import React from 'react';

import ProjectListItem from '../components/ProjectListItem';

import toggleNavElements from '../lib/toggleNavElements';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCollapsed: false
    };
    this.handleFilterCollapse = this.handleFilterCollapse.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  componentDidMount() {
    toggleNavElements();
  }

  handleFilterCollapse() {
    this.setState({
      filterCollapsed: !this.state.filterCollapsed
    });
  }

  /*
    @param    number    determines the total number of list items to render
    
    Used to mock up a number of list items
  */
  renderListItems(number) {
    let items = [];
    let size = '';
    let tracker = 4;

    for (let i = 0; i < number; i++) {
      
      // Rules for managing item size
      if (tracker < 4) {
        size = 'half';
        tracker += 1;
      } else {
        size = 'full';
        tracker = 0;
      }

      // construct and add the item to the list
      items.push(
        <ProjectListItem
          key={`project-list-item-${i}`}
          number={i + 1}
          size={size}
        />
      );
    }

    return items;
  }

  render() {

    let { filterCollapsed } = this.state;

    let filterStatus = '';
    let filterWidth = 'quart';
    let listWidth = '3quart';

    filterCollapsed ?
      (
        filterStatus = 'collapsed',
        filterWidth = 'null',
        listWidth = 'full'
      ) :
      null;

    return (

      <div className="project-content">
        <div className="navigation-gutter"/>
        <div className="proj-full-cw proj-full-ch projects-list-wrapper">

          <div id="filter" className={`proj-${filterWidth}-cw proj-full-ch projects-filter-window ${filterStatus}`}>         
            {
              filterCollapsed ?
              <div /> :
              <div className="proj-full-cw proj-quart-ch">
                Anything in this box will need to be hidden before collapse
              </div>
            }

            <div className={`proj-full-cw collapse-button-wrapper ${filterStatus}`}>
              <div className={`filter-collapse-toggle no-select ${filterStatus}`} onClick={this.handleFilterCollapse}>
                Button
              </div>
            </div>   
          </div>

          <div id="list" className={`proj-${listWidth}-cw proj-full-ch projects-list`}>
            {
              this.renderListItems(20)
            }
          </div>
        </div>
      </div>
    );
  }
}