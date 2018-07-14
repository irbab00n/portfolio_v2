import React from 'react';

export default class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="about">
        <div id="about-content">
          <div className="about-container about-half-ch about-full-cw blue-bg-test">
            Carousel of Skills
          </div>
          <div className="about-container about-full-ch about-3quart-cw green-bg-test">
            Left
          </div>
          <div className="about-container about-full-ch about-quarter-cw gray-bg-test">
            Right
          </div>
        </div>
      </section>
    );
  }
}