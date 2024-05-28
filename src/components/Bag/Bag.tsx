import React, { useEffect, useMemo, useState } from 'react';
import { BagContainer, BagHeader } from '../../theme/BagStyles';
import BagIcon from '../BagIcon/BagIcon';
import BagItem from '../BagItem/BagItem';
import Subtotal from '../SubTotal/Subtotal';

interface Props {
    bagList: Object;
    hideBag: Boolean;
    removeFromBag: () => void;
    increaseItem: () => void;
    decreaseItem: () => void;
}
const Bag = ({ bagList, hideBag, removeFromBag, increaseItem, decreaseItem }: Props) => {
    const [fillColor, setFillColor] = useState('#999999');
    const [bagTotalPrice, setBagTotalPrice] = useState('');
    const [installmentsVal, setInstallmentsVal] = useState('');

    useEffect(() => {
        const unitPrice = bagList;
        const totalPrice = Object.keys(unitPrice).reduce((total, key) => {
            const item = unitPrice[key];
            if (item) return total + item.price * item.quantity;
            return total;
        }, 0);

        const installments = (totalPrice / 10).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        const toCurrency = totalPrice.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        setBagTotalPrice(toCurrency);
        setInstallmentsVal(installments);
    }, [bagList]);

    const mouseOver = () => {
        setFillColor('#ffffff');
    };

    const mouseLeave = () => {
        setFillColor('#999999');
    };

    const bagIsEmpty = useMemo(() => {
        if (bagTotalPrice === '0,00') {
            return (
                <div className="d-flex justify-content-center">
                    <h4 className="py-5 d-block">Sua sacola está vazia!</h4>
                </div>
            );
        } else {
            return <Subtotal bagTotalPrice={bagTotalPrice} installmentsVal={installmentsVal} />;
        }
    }, [bagTotalPrice, installmentsVal]);

    return (
        <BagContainer className="container">
            <BagHeader className="row m-0">
                <div className="col-2 col-md-2 p-0 d-flex justify-content-center align-items-center">
                    <button onClick={hideBag} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                        X
                    </button>
                </div>
                <div className="col-6 offset-1 col-md-6 offset-md-1 d-flex justify-content-around align-items-center">
                    <BagIcon width={48} bagList={bagList} />
                    <h1 className="mb-0 text-white">Sacola</h1>
                </div>
            </BagHeader>

            {Object.keys(bagList).map((key, index) => {
                const item = bagList[key];
                return (
                    <BagItem
                        key={index}
                        item={item}
                        index={index}
                        removeFromBag={removeFromBag}
                        increaseItem={increaseItem}
                        decreaseItem={decreaseItem}
                    />
                );
            })}
            {bagIsEmpty}
        </BagContainer>
    );
};

export default Bag;
