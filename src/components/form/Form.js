import React, {useState, useEffect} from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css';
import axios from 'axios'
import localforage from 'localforage'
import {useFormik} from 'formik'

const Tabel = (props) => {
  const [data, setData] = useState([]);
  const formik = useFormik({
    initialValues: {
        name: '',
        address: '',
        quantity: null,
        posCode: null,
        phone: ''
    },
    onSubmit: (values, action) =>{
      console.log(values)
        axios.post('https://api.juliaveronica.com/payment/create', values)
        // action.resetForm();
        
        .then((response) => {
          setData([]);
          localforage.setItem('keranjang', []);
          window.alert('Thanks, This Function is Still under progress')
      })
    }
})
    
    useEffect(() => {
        localforage.getItem('keranjang')
            .then( (data) => {
                setData(data || [])
            }
                )
    },  [])
    // console.log(data.map(item =>{
    //   const x = 0
    //   return (
    //     item.price
    //     )
    //  }).toString())
    console.log(data.map(item => {return `${item.price}`}).toString());
    
    const harga = data.map(item =>{return item.price}).toString()
  const checkout = () => {
    axios.post('https://api.juliaveronica.com/order/create', {
       total : harga ,
       status : "pending"
      })
        .then((response) => {
            setData([]);
            localforage.setItem('keranjang', []);
        })
}
  return (
      <Container className="mt-5 pt-5">
        <h2 className="my-5 h2 text-center">Checkout Form</h2>
        <Form onSubmit={formik.handleSubmit} className="shadow-lg p-3 mb-5 bg-light rounded">
          <div className="row">
          <div className="col-md-6 mb-2">
            <Label for="exampleEmail">Buyer Name</Label>
              <Input type="name" name="name" id="name" placeholder="Please Enter your name" onChange={formik.handleChange} 
                                    value={formik.values.name}/>
          </div>
          <div className="col-md-6 mb-2">
            <div className="col"><Label for="payment">Payment</Label></div>
            <div className="col">
              <Label name="payment" id="selectPayment">Please Transfer here : (Ex : BCA 7890389012)</Label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
            <Label for="exampleSelect">Buyer Address</Label>
              <Input type="textarea" name="address" id="address"onChange={formik.handleChange} 
                                    value={formik.values.address}/>
            </div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-end">
              <Button type="submit">Checkout</Button>
              </div>
          </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <Label for="exampleText">Phone number</Label>
              <Input type="number" name="phone" id="phone" onChange={formik.handleChange} 
                                    value={formik.values.phone}/>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6 mb-2">
            <Label for="examplePassword">Zipcode</Label>
              <Input type="number" name="posCode" id="posCode" placeholder="Zipcodes" onChange={formik.handleChange} 
                                    value={formik.values.posCode}/>
          </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <Label for="exampleText">Quantity</Label>
              <Input type="number" name="quantity" id="quantity" onChange={formik.handleChange} 
                                    value={formik.values.quantity} />
            </div>
          </div>
          
          
          <div className="row mt-4">
            <div className="col-md-6">
            <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" />{' '}
                  I Agree With The Terms And Agreement
                </Label>
              </FormGroup>
            </div>
              
          </div>
          
        </Form>
    </Container>
  );
}

export default Tabel;