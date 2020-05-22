import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css';

const Tabel = (props) => {
  return (
      <Container className="mt-5 pt-5">
        <h2 className="my-5 h2 text-center">Checkout Form</h2>
    <Form className="shadow-lg p-3 mb-5 bg-light rounded">
      <div className="row">
      <div className="col-md-6 mb-2">
        <Label for="exampleEmail">Buyer Name</Label>
          <Input type="name" name="name" id="name" placeholder="Nama Penjual" />
      </div>
      <div className="col-md-6 mb-2">
        <Label for="payment">Pembayaran</Label>
          <Input type="select" name="payment" id="selectPayment">
            <option>-Pilih-</option>
            <option>BCA</option>
            <option>Mandiri</option>
            <option>BNI</option>
            <option>BRI</option>
            <option>BPR</option>
          </Input>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-2">
        <Label for="exampleSelect">Buyer Address</Label>
          <Input type="textarea" name="address" id="exampleSelect"/>
        </div>
        <div className="col-md-6 ">
          <div className="d-flex justify-content-end">
          <Button>Checkout</Button>
          </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-6 mb-2">
        <Label for="examplePassword">Zipcode</Label>
          <Input type="number" name="input" id="input" placeholder="Zipcodes" />
      </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-2">
          <Label for="exampleText">Pesan untuk Penjual</Label>
          <Input type="textarea" name="text" id="exampleText" />
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