/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BagItemDetails, BagItemPrice, BagItemTitle, BagItemWrapper } from '../../theme/BagItemStyles';

const BagItem = ({ item, removeFromBag, decreaseItem, increaseItem }) => {
    const [fillColor, setFillColor] = useState('#000000');
    const [deletedLine, setDeletedLine] = useState('');
    const [itemOpacity, setItemOpacity] = useState(1);

    const mouseOver = () => {
        setFillColor('#ffffff');
    };

    const mouseLeave = () => {
        setFillColor('#000000');
    };

    const handleRemoveItem = () => {
        setDeletedLine('line-through');
        setItemOpacity(0);
        setTimeout(() => {
            setDeletedLine('');
            setItemOpacity(1);
            removeFromBag(item.id);
        }, 500);
    };

    const itemTotalPrice = (item.price * item.quantity).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return (
        <BagItemWrapper className="row" $deleted={deletedLine} opacity={itemOpacity}>
            <div className="col-2 col-md-1 p-0">
                <img src={item.thumbUrl} alt="" />
            </div>

            <div className="col-7 col-md-8 pr-0 align-items-start">
                <BagItemTitle>
                    {item.title} {item.description}
                </BagItemTitle>
                <BagItemDetails>
                    {item.availableSizes} | {item.style}
                </BagItemDetails>
                <BagItemDetails>
                    <span>Quantidade: </span>
                    <div fontSize="16px" color="#dfbd00" onClick={() => decreaseItem(item.id)}>
                        -
                    </div>
                    <span className="mx-1 text-white"> {item.quantity} </span>
                    <div fontSize="16px" color="#dfbd00" onClick={() => increaseItem(item.id)}>
                        +
                    </div>
                </BagItemDetails>
            </div>

            <div className="col-3 col-md-3 p-0 d-flex flex-column align-items-end">
                <button onClick={handleRemoveItem} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                    {/* MdClose */}
                    <div fontSize="24px" color={fillColor} />
                </button>

                <BagItemPrice>
                    {item.currencyFormat} {itemTotalPrice}
                </BagItemPrice>
            </div>
        </BagItemWrapper>
    );
};

export default BagItem;
