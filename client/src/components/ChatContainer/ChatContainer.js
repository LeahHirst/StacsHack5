import React from 'react';
import styled from 'styled-components';
import { MessageBox } from '..';
import SuggestionList from '../SuggestionList/SuggestionList';
import { startTranscribing } from '../../api/Transcription';
import * as Tts from '../../tts/tts';

export default class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listening: true,
            message: ''
        }

        startTranscribing(result => {
            if (result.type == 'interim') {
                this.setState({
                    listening: true,
                    message: result.message
                });
            } else {
                this.setState({
                    listening: false,
                    message: result.message
                })
            }
        })
    }

    speakSuggestion(suggestion) {
        Tts.textToSpeech(suggestion, function() {
            // Finished
        });
    }

    render() {
        return (
            <ChatContainerDiv>
                <MessageBox message={this.state.message} listening={this.state.listening} />
                <SuggestionList suggestions={[ 'Good, thanks!', 'Not too bad' ]} applySuggestion={this.speakSuggestion.bind(this)} />
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