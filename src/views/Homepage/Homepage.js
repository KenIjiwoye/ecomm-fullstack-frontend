import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Sidenav from '../../components/Sidenav/Sidenav';
import Carousel from '../../components/Carousel/Carousel';
import ShopItem from '../../components/ShopItem/ShopItem';
import Footer from '../../components/Footer/Footer';

export default class Homepage extends Component {
  state={
    products: [],
  }
  async componentDidMount() {
      await fetch('/products')
              .then( res => res.json())
              .then(products => this.setState({ products }))
  }

  getSedans = async () =>{
    await fetch('/products/?category=sedan')
            .then( res => res.json())
            .then( products => this.setState({ products }))
  }
  
  getSavs = async () =>{
    await fetch('/products/?category=sav')
            .then( res => res.json())
            .then( products => this.setState({ products }))
  }
  
  getAll = async () =>{
    await fetch('/products')
            .then( res => res.json())
            .then( products => this.setState({ products }))
  }
    render() {
      let shopList = this.state.products.map(( p, i) => (
        <ShopItem key={i} product={p} />
      ))
        return (
            <div>
            <Navbar />
            <div class="container">
              <div class="row">
                <div class="col-lg-3">
                  <Sidenav getSedans={this.getSedans} getSavs={this.getSavs} getAll={this.getAll} />
                </div>
                <div class="col-lg-9">
                  <Carousel />
                  <div class="row">
                    {shopList}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        );
    }
}