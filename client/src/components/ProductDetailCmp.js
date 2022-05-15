// ! findReplace all "Product" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "product" Make sure lower case
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Card} from 'react-bootstrap'; 

const ProductDetailCmp = (props) => {
    const [product, productSetter] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                productSetter(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <main>
            <Card style = {{width: '50rem', padding: '1rem', border: "0.1rem solid grey",  marginBottom: "0.5rem"}} > 
                <p>Title: {product.Title}</p>
                <p>Price: {product.Price}</p>
                <p>Description: {product.Description}</p>
                {/* <p> Additional fields to be added here.</p> */}
            </Card>
        </main>
    )
}
export default ProductDetailCmp;