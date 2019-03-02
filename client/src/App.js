import React, {Component} from 'react';
import {MainPage} from "./views";
import {Logo, Header} from './components';
import ChatContainer from './components/ChatContainer';
import * as Api from './api/Api'

class App extends Component {

    render() {
        // Api.sendMessage("hello", function() {}, function() {});
        return (
            <>
                <Header/>
                <ChatContainer/>
            </>
        );
    }
}

export default App;
