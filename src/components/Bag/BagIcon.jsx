import React from 'react';
import Icon from '../../assets/icon-bag.svg';
import { BagIconImg, BagIconWrapper, ItemsOnBag } from '../../theme/BagIconStyles';

const BagIcon = ({ bagList, width }) => {
  const itemsOnBag = Object.keys(bagList).reduce((total, key) => {
    const item = bagList[key];
    if (item) return total + item.quantity;
    return total;
  }, 0);

  return (
    <BagIconWrapper>
      <BagIconImg width={width} src={Icon} alt="Ver sacola" />
      <ItemsOnBag style={{ display: itemsOnBag > 0 ? 'block' : 'none' }}>{itemsOnBag}</ItemsOnBag>
    </BagIconWrapper>
  );
};

export default BagIcon;
