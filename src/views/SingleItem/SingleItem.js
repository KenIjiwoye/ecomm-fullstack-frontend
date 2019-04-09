import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidenav from '../../components/Sidenav/Sidenav';
import Reviews from './Reviews';
import { AddToCart } from 'react-snipcart'
import BuyButton from '../../components/BuyButton/BuyButton';

export default class SingleItem extends Component {
    shouldComponentUpdate(){
        return false
    }
    render() {
        const { name, description, image, price, _id } = this.props.history.location.state;
        const id = this.props.history.location.state._id;
        return (
            <div>
                <Navbar />
                <div class="container">
                    <div class="row">
                    <div class="col-lg-3">
                        {/* <Sidenav /> */}
                    </div>
                    <div class="col-lg-9">
                        <div class="card mt-4">
                        <img class="card-img-top img-fluid" src={image} alt=""/>
                        <div class="card-body">
                            <h3 class="card-title">{name}</h3>
                            <h4 style={styles.price} >$ {price} USD</h4>
                            <span><BuyButton id={id} product={this.props.history.location.state} /></span>
                            <br /> <br />
                            <p class="card-text">{description}</p>
                            <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                            4.0 stars
                        </div>
                        </div>
                        <Reviews />
                    </div>
                    </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

const styles ={
    price: {
        color: 'green'
    }
}