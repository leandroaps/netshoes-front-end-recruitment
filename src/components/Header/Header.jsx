import React from 'react';
import { MainHeader } from '../../theme/HeaderStyles';
import { OpenBagButton } from '../../theme/OpenBagButtonStyles';
import BagIcon from '../BagIcon/BagIcon';

// eslint-disable-next-line react/prop-types
const Header = ({ showBag, bagList }) => {
    return (
        <MainHeader>
            <div className="row">
                <div className="d-none d-md-block col-md-10"></div>
                <div className="col-10 offset-1 col-md-1 offset-md-0 d-flex flex-column align-items-end">
                    <OpenBagButton onClick={showBag}>
                        <BagIcon width={32} bagList={bagList} />
                    </OpenBagButton>
                </div>
            </div>
        </MainHeader>
    );
};

export default Header;
