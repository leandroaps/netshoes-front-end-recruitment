import React from 'react';
import { MainHeader } from '../../theme/HeaderStyles';
import { OpenBagButton } from '../../theme/OpenBagButtonStyles';
import BagIcon from '../Bag/BagIcon';

const Header = (props) => {
  return (
    <MainHeader>
      <div className="row">
        <div className="d-none d-md-block col-md-10"></div>
        <div className="col-10 offset-1 col-md-1 offset-md-0 d-flex flex-column align-items-end">
          <OpenBagButton onClick={props.showBag}>
            <BagIcon width={32} bagList={props.bagList} />
          </OpenBagButton>
        </div>
      </div>
    </MainHeader>
  );
};

export default Header;
