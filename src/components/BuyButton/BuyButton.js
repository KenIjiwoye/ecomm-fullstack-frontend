import React, { Component } from 'react';

export default class BuyButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.product.id,
            name: props.product.name,
            price: props.product.price,
            weight: props.product.weight,
            description: props.product.description,
            url: "/snipcartParser"
        }
    }
    render() {
        const { id, name, price, description, url } = this.state;
        return (
            <button
                className="btn btn-success snipcart-add-item BuyButton"
                data-item-id={id}
                data-item-name={name}
                data-item-price={price}
                // data-item-weight={this.state.weight}
                data-item-url={url}
                data-autopop="false"
                data-item-description={description}>
                I Gotta Have It! 
            </button>
        );
    }
}