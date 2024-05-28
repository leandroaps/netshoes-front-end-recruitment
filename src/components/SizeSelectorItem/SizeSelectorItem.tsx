/* eslint-disable react/prop-types */
import React from 'react';

const SizeSelectorItem = ({ product, itemSize }) => {
    return (
        <li>
            <input
                type="radio"
                id={product.id + itemSize}
                name={product.title}
                value={itemSize}
                onChange={() => {
                    console.log(itemSize, product.id);
                }}
            />
            <label htmlFor={product.id + itemSize}>{itemSize}</label>
        </li>
    );
};

export default SizeSelectorItem;
