import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Logo } from '..';

export default class Page extends React.Component {
    render() {
        return (
            <PageDiv>
                {this.props.children}
            </PageDiv>
        )
    }
}

const anim = keyframes`
0% {
    opacity: 0;
}
50% {
    opacity: 0;
}
100% {
 opacity: 1;
}
`;

const PageDiv = styled.div`
position: fixed;
animation: ${anim} 2s ease-in-out;
background-color: #eee;
top: 0;
bottom: 0;
left: 0;
right: 0;
`;