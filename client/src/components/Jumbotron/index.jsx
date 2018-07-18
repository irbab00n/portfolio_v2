import React from 'react';

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { isMobile, isPortait} = this.props;

    return (
      /*
        If we are intending to make any of the images here unselectable,
        we will have change the element type to a <div> that uses the images as a background
      */
      <section id="jumbotron">
        <div className="jumbotron-images-wrapper">
          <img className="jumbotron-image-full-size" src={'https://conteudo.startse.com.br/wp-content/uploads/2016/04/golden-gate-bridge-wallpaper-5.jpg'}/>
        </div>
      </section>

    );

  }
}