import React from 'react';
import { BuyButton, Currency, Divisor, Item, ItemInstallments, ItemPrice, Title } from '../../theme/ProductStyles';
import SizeSelector from './SizeSelector';

const Product = ({ product, index, addToBag }) => {
  const priceFormated = product.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const installmentPrice = (product.price / product.installments).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // Se o produto não possui numero de parcelas, não exibe na lista
  let showInstallments;
  if (product.installments === 0) {
    showInstallments = '';
  } else {
    showInstallments = (
      <ItemInstallments>
        ou {product.installments} x {installmentPrice}
      </ItemInstallments>
    );
  }

  return (
    <div className="col-md-4 mb-5" key={product.id}>
      <Item>
        <img src={product.imgUrl} alt="{ product.title }" />
        <Title fontSize={14}>
          {product.title} {product.description}
        </Title>

        <SizeSelector product={product} />

        <Divisor>___</Divisor>
        <p className="mb-0">
          <Currency>{product.currencyFormat}</Currency> <ItemPrice>{priceFormated}</ItemPrice>
        </p>
        {showInstallments}
        <BuyButton
          onClick={() => {
            addToBag(index);
          }}
        >
          comprar
        </BuyButton>
      </Item>
    </div>
  );
};

export default Product;
