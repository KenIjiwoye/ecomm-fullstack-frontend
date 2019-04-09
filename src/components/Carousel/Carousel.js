import React, { Component } from 'react';

export default class Carousel extends Component {
  state={
    images: []
  }
  async componentDidMount() {
      await fetch('/sliderimages')
              .then( res => res.json())
              .then( images => this.setState({ images }))
  }
    render() {
      console.log(this.state.images)
      let slider = this.state.images.map( (image, i) =>(
        <div key={i} class="carousel-item">
          <img style={styles.img} class="d-block img-fluid" src={image.image.url} alt="Second slide"/>
        </div>
      ))
        return (
            <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img style={styles.img} class="d-block img-fluid" src="./uploads/4058edfca086421bb648cd6907bdbe87.jpg" alt="First slide"/>
                  </div>
                  {slider}
                  {/* <div class="carousel-item">
                    <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
                  </div> */}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        );
    }
}

const styles = {
  img: {
    maxHeight: 350,
    overflow: 'hidden',
    width: '100%',

  }
}