/* eslint-disable react/prop-types */
import React from 'react';
import { SizeSelectorList } from '../../theme/SizeSelectorStyles';
import SizeSelectorItem from '../SizeSelectorItem/SizeSelectorItem';

const SizeSelector = ({ product }) => {
    return (
        <SizeSelectorList>
            {product.availableSizes.map((itemSize, index) => {
                return <SizeSelectorItem key={index} product={product} itemSize={itemSize} />;
            })}
        </SizeSelectorList>
    );
};

export default SizeSelector;
