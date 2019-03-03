import React from 'react';
import styled from 'styled-components';
import { MessageBox } from '..';
import SuggestionList from '../SuggestionList/SuggestionList';
import { startTranscribing } from '../../api/Transcription';
import * as Tts from '../../tts/tts';
import { getSuggestions } from '../../api/Api';

export default class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listening: true,
            message: '',
            suggestions: ['ok', 'yes', 'no'],
            pause: () => {},
            resume: () => {}
        }

        let { pause, resume } = startTranscribing(result => {
            getSuggestions(result.message, (responses) => {
                this.setState({
                    suggestions: responses.map(res => res.text)
                });
            });
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
        });
        this.state.pause = pause;
        this.state.resume = resume;
    }

    speakSuggestion(suggestion) {
        this.state.pause();
        this.setState({
            listening: false
        });
        Tts.textToSpeech(suggestion, function() {
            let { pause, resume } = startTranscribing(result => {
                getSuggestions(result.message, (responses) => {
                    this.setState({
                        suggestions: responses.map(res => res.text)
                    });
                });
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
            });
            this.state.pause = pause;
            this.state.resume = resume;
        }.bind(this));
    }

    render() {
        return (
            <ChatContainerDiv>
                <MessageBox message={this.state.message} listening={this.state.listening} />
                <SuggestionList suggestions={this.state.suggestions} applySuggestion={this.speakSuggestion.bind(this)} />
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