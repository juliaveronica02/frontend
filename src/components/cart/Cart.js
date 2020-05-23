// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// class Cart extends Component {
//   render() {
//     let addedItems = this.props.items.length ? (
//       this.props.items.map((item) => {
//         return (
//           <li className="collection-item avatar" key={item.id}>
//             {/* image */}
//             <div className="item-img">
//               <img src={item.img} alt={item.img} className="" />
//             </div>
//             {/* name */}
//             <div className="item-desc">
//               <span className="title">{item.name}</span>
//               {/* description */}
//               <p>{item.description}</p>
//               {/* price */}
//               <p>
//                 <b>Price: {item.price}$</b>
//               </p>
//               {/* quantity */}
//               <p>
//                 <b>Quantity: {item.quantity}</b>
//               </p>
//               {/* item get category by id */}
//               <p>
//                 <b>Category: {item.categoryId}</b>
//               </p>
//               <div className="add-remove">
//                 <button>
//                   <Link to="/cart">Add More</Link>
//                 </button>
//                 <button>
//                   <Link to="/cart">Reduce</Link>
//                 </button>
//               </div>
//               <button className="btn btn-danger">Remove</button>
//             </div>
//           </li>
//         );
//       })
//     ) : (
//       <p>Nothing.</p>
//     );
//     return (
//       <div className="container content">
//         <div className="cart">
//           <h5>You have ordered:</h5>
//           <ul className="collection">{addedItems}</ul>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.cart.addedItems,
//   };
// };

// export default connect(mapStateToProps)(Cart);

import React, { useEffect, useState }  from 'react';
import { connect } from 'react-redux';
import localforage from 'localforage';
import {Link} from 'react-router-dom'

import axios from 'axios';
import Counter from './../reducer/Counter'

const Index = (props) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        localforage.getItem('keranjang')
            .then( (data) => {
                setData(data || [])
            }
                )
    },  [])

    const checkout = () => {
        axios.post('https://api.juliaveronica.com/order/create', { pembelian : data })
            .then((response) => {
                setData([]);
                localforage.setItem('keranjang', []);
            })
    }
    const URL = "http://3.136.102.205/";

    return (
        <div className="mt-5 pt-5 text-center">
            <h1>Your Cart</h1><hr/>
            <div className="container">
                {data.map( (item) => {
                    return (
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={`${URL}${item.imageUrl}`} alt={item.name} style={{height : "200px"}} />
                                </div>
                                <div className="col-md-6 text-left">
                                    <h4>Nama : {item.name}</h4>
                                    <h6>Price : Rp {item.price}</h6>
                                    {/* <Counter/> */}
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/checkout">Checkout</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.keranjang
    }
}

export default connect(mapStateToProps)(Index);
