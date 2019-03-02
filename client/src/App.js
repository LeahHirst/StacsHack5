import React, {Component} from 'react';
import {MainPage} from "./views";
import {Logo, Header} from './components';
import ChatContainer from './components/ChatContainer';
import * as Api from './api/Api'
import * as Tts from './tts/tts'

class App extends Component {

    render() {
        // Api.sendMessage("hello", function() {}, function() {});
        Tts.textToSpeech("Hello!", function() {console.log("DONE")});
        return (
            <>
                <Header/>
                <ChatContainer/>
            </>
        );
    }
}

export default App;
