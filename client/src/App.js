import React, { Component } from 'react';
import './App.css';
import { MainPage } from "./views";
import { Logo, Header } from './components';
import ChatContainer from './components/ChatContainer';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <ChatContainer />
            </>
        );
    }
}

export default App;
