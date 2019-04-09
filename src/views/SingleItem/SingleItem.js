import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidenav from '../../components/Sidenav/Sidenav';
import Reviews from './Reviews';

export default class SingleItem extends Component {
    render() {
        const { name, description, image, price } = this.props.history.location.state;
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
                            <h4>$ {price} USD</h4>
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