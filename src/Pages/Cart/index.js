import React, { useEffect, useState }  from 'react';
import { connect } from 'react-redux';
import localforage from 'localforage';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';

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
                Swal.fire("Thank You, The Next Feature is Still Coming Soon")
            })
    }
    const URL = `${process.env.REACT_APP_API_URL_SERVER}`;

    return (
        <div className="mt-5 pt-5 text-center">
            <h1>Your Cart</h1><hr/>
            <div className="container">
                {data.map( (item) => {
                    return (
                        <div className="jumbotron">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={`${URL}/${item.imageUrl}`} alt={item.name} style={{height : "200px"}} />
                                </div>
                                <div className="col-md-6 text-left">
                                    <h4>Nama : {item.name}</h4>
                                    <h6>Price : Rp {item.price}</h6>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" onClick={checkout}>Checkout</Link>
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