// ! findReplace all "Product" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "product" Make sure lower case
import React, { useState } from 'react'
import ProductFormCmp from '../components/ProductFormCmp';
import ProductListCmp from '../components/ProductListCmp';

const MainView = (props) => {
    
    const [productList, productListSetter] = useState([]);
    
    return (
        <main>
            <div className="row_flex_left">
                <ProductFormCmp productList={productList} productListSetter={productListSetter} />
            </div>
            <div className="row_flex_left">
                <ProductListCmp productList={productList} productListSetter={productListSetter} />
            </div>
        </main>
    )
}
export default MainView;
