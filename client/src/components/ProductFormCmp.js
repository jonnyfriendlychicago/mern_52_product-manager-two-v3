// ! findReplace all "Product" with "YourNewProductityName" or whatever your new thing is 
// ! THEN do similar find replace for "product" Make sure lower case
import React, {useState} from 'react';
import axios from 'axios'; 
import {Container, Row, Card, Form} from 'react-bootstrap'; 

const ProductFormCmp = (props) => {

    const {productList, productListSetter} = props; 
    // const [stringFieldOne, stringFieldOneSetter ] = useState("");
    // const [stringFieldTwo, stringFieldTwoSetter] = useState("");
    // const [numberField, numberFieldSetter] = useState("");
    const [Title, TitleSetter ] = useState("");
    const [Price, PriceSetter] = useState("");
    const [Description, DescriptionSetter] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios
            .post("http://localhost:8000/api/products", {
                Title, 
                Price, 
                Description
            })
            .then(res=> {
                console.log(res); 
                console.log(res.data); 
                productListSetter([...productList, res.data]); 
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                    <h2>Enter a New Product</h2>
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group className="mb-3 bg-white" controlId="FormGroup_01">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                style = {{width: '300px', height: "25px"}}
                                type = "textarea"
                                // value={toDo}
                                onChange ={(e) => TitleSetter(e.target.value)}
                            /> 
                        </Form.Group>

                        <Form.Group className="mb-3 bg-white" controlId="FormGroup_02">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                style = {{width: '300px', height: "25px"}}
                                type = "textarea"
                                // value={toDo}
                                onChange ={(e) => PriceSetter(e.target.value)}
                            /> 
                        </Form.Group>

                        <Form.Group className="mb-3 bg-white" controlId="FormGroup_03">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                style = {{width: '300px', height: "25px"}}
                                type = "textarea"
                                // value={toDo}
                                onChange ={(e) => DescriptionSetter(e.target.value)}
                            /> 
                        </Form.Group>

                        {/* below is fine, but not updated yet wed 5/11 */}

                        {/* <Form.Group className="mb-3 bg-white" controlId="FormGroup_02">
                            <Form.Label>Work Area:</Form.Label>
                            <Form.Select 
                                    style = {{width: '300px', height: '35px'}} 
                                    aria-label="Default select example"
                                    onChange={ workAreaHandle }  >
                                    <option selected></option>
                                    <option value="diet">Diet</option>
                                    <option value="fitWell">Fitness/Wellness</option>
                                    <option value="homeMaintenance">Home Maintenance</option>
                                    <option value="work">Work</option>
                                    <option value="kids">Kids</option>
                                    <option value="contEd">Cont'd Ed/Skills</option>
                                    <option value="social">Social</option>
                                    <option value="yourTime">Your Thing</option>
                            </Form.Select>
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="ToDo03">
                            <Form.Control style = {{width: "100px"}} className="btn btn-primary" type = "submit" value="Submit it!"/>
                        </Form.Group>
                    </Form> 
                </Card>
            </Row>
        </Container> 

    )

}; 

export default ProductFormCmp; 