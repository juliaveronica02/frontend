import React from 'react';
import { connect } from 'react-redux';

import { beli } from './../actioncreators/cart'

const Item = (props) => {
    const { cart } = props;

    const beli = () => {
        props.beli(cart.id, cart.name, cart.price, cart.imageUrl);
        console.log(`saya beli ${cart.name}`)
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={beli}>Add To Cart</button>
        </div>
    )
}

const mapDispatchToProps = { beli }

export default connect(null, mapDispatchToProps)(Item);