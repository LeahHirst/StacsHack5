import React from 'react';
import styled, { keyframes } from 'styled-components';

export default class ListeningIndicator extends React.Component {
    render() {
        return (
            <ListeningIndicatorDiv listening={this.props.listening}>
                <Dot delay={0.0} />
                <Dot delay={0.2} />
                <Dot delay={0.4} />
            </ListeningIndicatorDiv>
        )
    }
}

const ListeningIndicatorDiv = styled.div`
display: inline-block;
background-color: rgba(0, 0, 0, 0.5);
opacity: ${props => props.listening ? 1 : 0};
border-radius: 13px;
width: 25px;
height: 25px;
box-sizing: border-box;
transform: translateY(-2px);
margin-left: 5px;
padding-left: 3px;
`;

const DotAnimation = keyframes`
0% {
    transform: translateY(0);
}
25% {
    transform: translateY(-3px);
}
50% {
    transform: translateY(0);
}
100% {
    transform: translateY(0);
}
`;

const Dot = styled.div`
background-color: #fff;
width: 4px;
height: 4px;
display: inline-block;
border-radius: 2px;
margin: 1px;
animation: ${DotAnimation} 1s infinite;
animation-delay: ${props => props.delay}s
`;