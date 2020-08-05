import React from 'react';
import styled from 'styled-components';

import Action from '/imports/ui/InteractiveStuff/Actions/Action';

const Actions = (props) => {
    const { className, ...newProps } = props;
    return (
        <div className={className}>
            <Action {...newProps}>Mortgage</Action>
            <Action {...newProps}>Unmortgage</Action>
            <Action {...newProps}>Build</Action>
            <Action {...newProps}>Sell</Action>
        </div>
    );
};

const StyledActions = styled(Actions)`
    display: grid;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    opacity: ${({hidden}) => hidden ? `0.4` : `1`};
`;

export default StyledActions;
