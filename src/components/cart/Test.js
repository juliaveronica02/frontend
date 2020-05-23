import React from 'react';
import { connect } from 'react-redux';
import { beli } from './../actioncreators/cart'

const Item = (props) => {
    const { cart } = props;

    const beli = () => {
        props.beli(cart.id, cart.name, cart.price, cart.imageUrl);
        console.log(`saya beli ${cart.name}`)
        window.alert('Item Added to Cart')
    }
    return (

            <button className="btn btn-outline-light btn-secondary" onClick={beli}>Add To Cart</button>

    )
}

const mapDispatchToProps = { beli }

export default connect(null, mapDispatchToProps)(Item);