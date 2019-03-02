import React from 'react';
import styled from 'styled-components';

import LogoRaw from './Logo.svg';

export default class Logo extends React.Component {
    render() {
        return (
            <LogoDiv>
                <img src={LogoRaw} />
            </LogoDiv>
        )
    }
}

const LogoDiv = styled.div`

`;