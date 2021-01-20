import styled, { css, keyframes } from 'styled-components';

const slide = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(7px);
  }
`;

const Span = styled.span`
    display: ${({block}) => block ? 'block' : ''};
    text-align: ${({center}) => center ? 'center' : ''};
    font-size: ${({size}) => `${size}rem`};
    color: ${({color}) => color ? color : 'inherit'};
    text-transform: ${({text}) => text}; 
    margin: ${({marginY}) => marginY ? `${marginY}px` : '0'} ${({marginX}) => marginX ? `${marginX}px` : '0'};
    padding: ${({paddingY}) => paddingY ? `${paddingY}px` : '0'} ${({paddingX}) => paddingX ? `${paddingX}px` : '0'};
    border: ${(props) => props['data-focus'] ? '2px solid red' : ''};
    font-weight: ${({weight}) => weight};
    
    ${({finished}) => finished !== undefined ? 
        css`
            &:before {
                ${({finished}) => !finished ?
                css`
                    animation: 1.5s ease-in infinite alternate ${slide};
                ` : ''
                }
                content: ${({finished}) => !finished ? "\"➔\"" : "\"✔\""};
                display: inline-block;
                line-height: 100%;
                font-size: 1.5rem;
                margin-right: 10px;
            }
        ` : ''
    }
`;

export default Span;
