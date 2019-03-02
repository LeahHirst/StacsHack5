import React from 'react';
import styled from 'styled-components';

import LogoRaw from './Logo.svg';

export default class Logo extends React.Component {
    render() {
        return (
            <LogoDiv>
                <img alt="Quikr chat logo" src={LogoRaw} width="161" height="81" />
            </LogoDiv>
        )
    }
}

const LogoDiv = styled.div`

`;