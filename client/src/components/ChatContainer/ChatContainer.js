import React from 'react';
import styled from 'styled-components';
import { MessageBox } from '..';

export default class ChatContainer extends React.Component {
    render() {
        return (
            <ChatContainerDiv>
                <MessageBox message="Hello Leah Hirst, how are" listening={true} />
            </ChatContainerDiv>
        )
    }
}

const ChatContainerDiv = styled.div`
padding: 20px;
text-align: center;
margin: auto;
max-width: 700px;
width: 100%;
`;