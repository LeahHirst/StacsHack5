import React, {Component} from 'react';
import {MainPage} from "./views";
import {Logo, Header} from './components';
import ChatContainer from './components/ChatContainer';
import * as Api from './api/Api'
import AnimatedLogo from './components/AnimatedLogo';
import Page from './components/Page';

class App extends Component {

    render() {
        return (
            <>
                <Page>
                    <Header/>
                    <ChatContainer/>
                </Page>
                <AnimatedLogo />
            </>
        );
    }
}

export default App;
