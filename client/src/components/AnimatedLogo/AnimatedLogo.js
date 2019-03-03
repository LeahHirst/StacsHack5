import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Logo } from '..';

export default class AnimatedLogo extends React.Component {
    render() {
        return (
            <AnimatedLogoDiv>
                <Logo />
            </AnimatedLogoDiv>
        )
    }
}

let xOffset = (window.innerWidth / 2) - 80;
let yOffset = (window.innerHeight / 2) - 40;

const anim = keyframes`
0% {
  transform: translate(${xOffset}px, ${yOffset}px) scale(0);
}
50% {
  transform: translate(${xOffset}px, ${yOffset}px) scale(1.5);
}
100% {
  transform: translate(${xOffset}px, 20px) scale(1);
}
`;

const AnimatedLogoDiv = styled.div`
position: fixed;
transform: translate(${xOffset}px, 20px);
animation: ${anim} 2s ease-in-out;
`;