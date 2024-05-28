import React, { useCallback, useEffect, useState } from 'react';
import ProductsList from '../../pages/ProductsList';
import { BagReveal } from '../../theme/BagStyles';
import Bag from '../Bag/Bag';
import Header from '../Header/Header';

const Shop = () => {
    const [isBagOpen, setIsBagOpen] = useState(false);
    const [bagList, setBagList] = useState({});

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('productsOnBag'));
        if (products) {
            setBagList(products);
        }
    }, []);

    const showBag = useCallback(() => {
        setIsBagOpen(true);
    }, []);

    const hideBag = useCallback(() => {
        setIsBagOpen(false);
    }, []);

    const addToBag = useCallback(
        (item) => {
            setBagList((prevBagList) => {
                const newBagList = { ...prevBagList };
                if (newBagList[item.id]) {
                    newBagList[item.id].quantity++;
                } else {
                    newBagList[item.id] = { ...item, quantity: 1 };
                }
                localStorage.setItem('productsOnBag', JSON.stringify(newBagList));
                return newBagList;
            });
            showBag();
        },
        [showBag]
    );

    const removeFromBag = useCallback((id) => {
        setBagList((prevBagList) => {
            const newBagList = { ...prevBagList };
            delete newBagList[id];
            localStorage.setItem('productsOnBag', JSON.stringify(newBagList));
            return newBagList;
        });
    }, []);

    const increaseItem = useCallback((id) => {
        setBagList((prevBagList) => {
            const newBagList = { ...prevBagList };
            if (newBagList[id]) {
                newBagList[id].quantity++;
                localStorage.setItem('productsOnBag', JSON.stringify(newBagList));
            }
            return newBagList;
        });
    }, []);

    const decreaseItem = useCallback((id) => {
        setBagList((prevBagList) => {
            const newBagList = { ...prevBagList };
            if (newBagList[id]) {
                if (newBagList[id].quantity > 1) {
                    newBagList[id].quantity--;
                } else {
                    delete newBagList[id];
                }
                localStorage.setItem('productsOnBag', JSON.stringify(newBagList));
            }
            return newBagList;
        });
    }, []);

    const bagVis = isBagOpen ? { right: '0', opacity: '1' } : { right: '-100%', opacity: '1' };

    return (
        <>
            <Header showBag={showBag} bagList={bagList} />
            <ProductsList showBag={showBag} addToBag={addToBag} />
            <BagReveal style={bagVis}>
                <Bag
                    bagList={bagList}
                    removeFromBag={removeFromBag}
                    hideBag={hideBag}
                    increaseItem={increaseItem}
                    decreaseItem={decreaseItem}
                />
            </BagReveal>
        </>
    );
};

export default Shop;
