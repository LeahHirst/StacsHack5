import React from 'react';
import styled from 'styled-components';
import { Logo } from '..';

export default class Header extends React.Component {
    render() {
        return (
            <HeaderDiv>
                <Logo />
            </HeaderDiv>
        )
    }
}

const HeaderDiv = styled.div`
padding: 20px;
background-color: #4A90E2;
text-align: center;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
`;