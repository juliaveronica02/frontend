import React from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './form.css';

const Tabel = (props) => {
  return (
      <Container>
    <Form className="shadow-lg p-3 mb-5 bg-light rounded">
      <FormGroup row >
        <Label for="exampleEmail" sm={2}>Nama Penjual</Label>
        <Col sm={10}>
          <Input type="name" name="name" id="name" placeholder="Nama Penjual" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="input" name="input" id="input" placeholder="Nama Barang" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Total Barang</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="payment" sm={2}>Pembayaran</Label>
        <Col sm={10}>
          <Input type="select" name="payment" id="selectPayment">
            <option>-Pilih-</option>
            <option>BCA</option>
            <option>Mandiri</option>
            <option>BNI</option>
            <option>BRI</option>
            <option>BPR</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={2}>Pesan untuk Penjual</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="checkbox2" sm={2}>Checkbox</Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Apakah anda sudah yakin?
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Checkout</Button>
        </Col>
      </FormGroup>
    </Form>
    </Container>
  );
}

export default Tabel;