import React, { Component } from 'react';
import logo from '../../assets/images/bmw-logo.png'

export default class Carousel extends Component {
  state={
    images: [],
    loading: true
  }
  async componentDidMount() {
      await fetch('/sliderimages')
              .then( res => res.json())
              .then( images => this.setState({ images, loading: false }))
  }
    render() {
      console.log('images ==>',this.state.images)
      // if(this.state.loading){
      //   return <h1>Loading up...</h1>
      // }
      let slider = this.state.images.map( (image, i) =>(
        <div key={i} class={`carousel-item ${i == 0 ? 'active': ''}`}>
          <img style={styles.img} class="d-block img-fluid" src={image.image.url} alt=""/>
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
                
                {slider}
                
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