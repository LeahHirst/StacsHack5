import React from 'react';
import styled from 'styled-components';
import { MessageBox } from '..';
import SuggestionList from '../SuggestionList/SuggestionList';

export default class ChatContainer extends React.Component {
    render() {
        return (
            <ChatContainerDiv>
                <MessageBox message="Hello Adam, how are" listening={true} />
                <SuggestionList suggestions={[ 'Good, thanks!', 'Not too bad' ]} />
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