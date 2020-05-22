import React from 'react'
import axios from 'axios';
import {useFormik} from 'formik';
import {Card, Button, Form, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
const Sell = () =>{
    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            imageUrl: '',
            quantity: '',
            categoryId: ''
        },
        onSubmit: (values, action) =>{
            axios.post('http://api.juliaveronica.com/item/create', values);
            action.resetForm();
        }
    })
    
    return (
       <Container>
            <Row className="justify-content-md-center">
                <Wrapper>
                    <Card className="text-left">
                        <Card.Body>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="name" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.name}
                                    placeholder="Product Name">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="price" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.price}
                                    placeholder="Item Price ex: 10000">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="description" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.description}
                                    placeholder="Describe your item here">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="imageUrl" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.imageUrl}
                                    placeholder="Paste your image Url here">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>quantity</Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="quantity" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.quantity}
                                    placeholder="Quantity of your item">
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control
                                    type="text" 
                                    name="categoryId" 
                                    onChange={formik.handleChange} 
                                    value={formik.values.categoryId}
                                    placeholder="Category ex : 1,2,3">
                                    </Form.Control>
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Wrapper>
            </Row>
        </Container>
    )
    
}
export default Sell;
const Wrapper = styled.section `
padding: 0;
margin: 0;
align-content: center;
`;