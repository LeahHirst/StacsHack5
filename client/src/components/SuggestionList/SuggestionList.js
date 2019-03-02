import React from 'react';
import styled from 'styled-components';
import { ListeningIndicator } from '..';

export default class SuggestionList extends React.Component {
    render() {
        return (
            <SuggestionListDiv>
                {this.props.suggestions.map(suggestion => {
                    return <Suggestion onClick={() => { this.props.applySuggestion(suggestion) }}>{suggestion}</Suggestion>
                })}
            </SuggestionListDiv>
        )
    }
}

const SuggestionListDiv = styled.div`
display: flex;
overflow: hidden;
margin-top: 10px;
`;

const Suggestion = styled.button`
border: solid 3px #4A90E2;
color: #4A90E2;
border-radius: 23px;
height: 46px;
margin-right: 5px;
font-size: 16px;
padding: 0 15px;
`;