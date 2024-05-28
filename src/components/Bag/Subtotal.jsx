import React from 'react';
import { BuyButton } from '../../theme/ProductStyles';
import { InstallmentsPrice, SubtotalWrapper, TotalPrice } from '../../theme/SubtotalStyles';

const Subtotal = ({ bagTotalPrice, installmentsVal }) => {
  return (
    <SubtotalWrapper className="row m-0">
      <div className="col-md-6 p-0 d-flex flex-row align-items-center">
        <p className="mb-0">Subtotal</p>
      </div>
      <div className="col-md-6 p-0 d-flex flex-column align-items-end">
        <TotalPrice>R$ {bagTotalPrice}</TotalPrice>
        <InstallmentsPrice>ou em até 10x de R$ {installmentsVal}</InstallmentsPrice>
      </div>
      <BuyButton secondary>comprar</BuyButton>
    </SubtotalWrapper>
  );
};

export default Subtotal;
