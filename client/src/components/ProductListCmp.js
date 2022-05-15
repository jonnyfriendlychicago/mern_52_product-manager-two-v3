// ! findReplace all "Product" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "product" Make sure lower case
import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import {Container, Row, Card} from 'react-bootstrap'; 

const ProductListCmp = (props) => {
    
    const {productList, productListSetter} = props;
    
    useEffect(()=>{
    	axios
            .get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data);
                productListSetter(res.data);
            })
            .catch((err)=>{console.log(err)})
    }, [])
    
    return (
        <Container> 
            <Row>
                {/* <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem" }}> */}
                    <h2>Products</h2>
                    {
                        productList.map((product, index)=>{
                        return (
                            // <div key={index}>
                            <Card style = {{width: '15rem', padding: '0.5rem', border: "0.1rem solid grey",  margin: "0.25rem"}} >
                                <p >{product.Title}</p>
                                <p> {product.Price}</p>
                                <p> {product.Description}</p>
                                {/* <p> Additional fields to be added here.</p> */}
                                <Link to={`/products/${product._id}`}>{product.Title} Details</Link>
                            </Card>
                            // </div>
                        )
                        })
                    }
                {/* </Card> */}
            </Row>
        </Container>
    )
}; 

export default ProductListCmp;
