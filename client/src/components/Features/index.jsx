import React from 'react';

export default class Features extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="about">
        <div id="about-content">
          <div className="container-test about-half-ch about-full-cw green-bg-test">
            Half Height, Full width -- Box 1
          </div>
          <div className="container-test about-half-ch about-half-cw blue-bg-test">
            Half Height, Half width -- Box 2a
          </div>
          <div className="container-test about-half-ch about-half-cw blue-bg-test">
            Half Height, Half width -- Box 2b
          </div>
          <div className="container-test about-full-ch about-full-cw gray-bg-test">
            Full Height, Full width -- Box 3
          </div>
        </div>
      </section>
    );
  }
}