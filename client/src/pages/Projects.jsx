import React from 'react';

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
    ! Used to mock up a number of list items
  */
  renderListItems(number) {
    let items = [];
    let tracker = 4;

    for (let i = 0; i < number; i++) {
      if (tracker < 4) {
        items.push(
          <div key={`list-item-${i}`} className="proj-half-cw proj-half-ch projects-list-item">
            {`item ${i + 1}`}
          </div>
        );
        tracker += 1;
      } else {
        items.push(
          <div key={`list-item-${i}`} className="proj-full-cw proj-full-ch projects-list-item">
            {`item ${i + 1}`}
          </div>
        )
        tracker = 0;
      }
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



            <div className={`filter-collapse-toggle no-select ${filterStatus}`} onClick={this.handleFilterCollapse}>
              Button
            </div>

            {
              filterCollapsed ?
              null :
              <div className="proj-full-cw proj-quart-ch">
                Anything in this box will need to be hidden before collapse
              </div>
            }

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