import React, { useEffect, useState } from 'react'
import Header from './Header.js'
import axios from 'axios';
import { Link } from "react-router-dom";
const productDetails = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')

    return response.data;
}

const Products = () => {
    const [value, setValue] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await productDetails();
            setValue(result);
        })();
    }, []);

    return (
        <div>
            <Header />
            <div className='container-product'>
                {value.map((k) => {
                    return <div className='items'>

                        <div className='product-title'>
                            <Link to={`/product-details/${k.id}`} > {k.title}</Link>

                        </div>
                        <div className='rate'>{k.rating.rate}/5</div>
                        <div className='center-item'>
                            <img height={130} width={130} src={k.image}></img>
                        </div>

                        <div className='price'>{k.price}</div>
                        <div className='center-item' >
                            <button className='cart'>Add To cart
                            </button>
                        </div>

                    </div>
                })}
            </div>

        </div>
    )
}
export default Products;









