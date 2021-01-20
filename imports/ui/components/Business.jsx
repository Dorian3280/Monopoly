import React from 'react';

import BusinessContainer from '/imports/ui/elements/BusinessContainer';
import Transaction from '/imports/ui/elements/Transaction';

const Business = () => {

    return (
        <BusinessContainer>
            {['build', 'Sell', 'mortgage', 'Unmortgage'].map(e => <Transaction key={e}>{e.ucFirst()}</Transaction>)}
        </BusinessContainer>
    );
};

export default Business;
