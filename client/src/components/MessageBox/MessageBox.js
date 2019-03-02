import React from 'react';
import styled from 'styled-components';
import { ListeningIndicator } from '..';

export default class MessageBox extends React.Component {
    render() {
        return (
            <MessageBoxDiv>
                {this.props.message}
                <ListeningIndicator listening={this.props.listening} />
            </MessageBoxDiv>
        )
    }
}

const MessageBoxDiv = styled.div`
padding: 12px 20px;
height: 46px;
box-sizing: border-box;
font-weight: bold;
border-radius: 23px;
background-color: #4A90E2;
text-align: left;
color: #fff;
`;