import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ShopItem extends Component {
    render() {
        const {  name, description, price } = this.props.product;
        const image = this.props.product.image.url;
        return (
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                <Link to={{
                    pathname: `/product/${name}`,
                    state: {
                        name,
                        image,
                        description,
                        price
                    }
                }} href="#"><img class="card-img-top" src={image} alt=""/></Link>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">{name}</a>
                    </h4>
                    <h5>$ {price} USD</h5>
                    {/* <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p> */}
                </div>
                {/* <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div> */}
                </div>
            </div>
        );
    }
}