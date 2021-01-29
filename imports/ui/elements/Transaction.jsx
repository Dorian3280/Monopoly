import styled, { css } from 'styled-components';

const Transaction = styled.div`
    width: 230px;
    height: 100px;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1C7C54;
    border-radius: 30px;
    background-position: 100% 100%;
    box-shadow: 0 0 0 2px #92DE34;
    opacity: ${({active}) => active ? 1 : 0.4};
    transition: 0.15s;

  ${({active}) => active ? css`
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 4px #92DE34;
      background: #135338;
    }

    &:active {
      box-shadow: inset 0 0 0 4px #92DE34;
    }
  `: ''}
`;

export default Transaction;
