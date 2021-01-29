import React from 'react';

import BusinessContainer from '/imports/ui/elements/BusinessContainer';
import Transaction from '/imports/ui/elements/Transaction';

const Business = ({currentPlayer, build, sell, mortgage, unmortgage}) => {

    const obj = (name) => ({
        build,
        sell,
        mortgage,
        unmortgage,
    })[name](name)

    return (
        <BusinessContainer>
            {['build', 'sell', 'mortgage', 'unmortgage'].map(e => <Transaction onClick={() => obj(e)} active={true} currentPlayer={currentPlayer} key={e}>{e.ucFirst()}</Transaction>)}
        </BusinessContainer>
    );
};

export default Business;
