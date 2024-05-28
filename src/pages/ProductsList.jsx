import React, { useEffect, useState } from 'react';
import Product from '../components/Product/Product';
import api from '../services/api';
import './ProductsList.css';

function ProductsList(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('products.json')
            .then((res) => {
                const productsData = res.data.products.map((product) => ({
                    ...product,
                    quantity: 1
                }));
                setProducts(productsData);
            })
            .catch(() => {
                alert('Ocorreu um erro na chamada da API.');
            });
    }, []); // Empty dependency array means this effect runs once on mount

    const addToBag = (index) => {
        props.addToBag(products[index]);
    };

    return (
        <div className="container list-wrapper">
            <div className="row">
                {products.map((product, index) => (
                    <Product key={index} product={product} index={index} addToBag={() => addToBag(index)} />
                ))}
            </div>
        </div>
    );
}

export default ProductsList;
