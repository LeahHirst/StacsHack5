import React, {Component} from 'react';
import './App.css';
import {MainPage} from "./views";
import React, { Component } from 'react';
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

    sendMessage(message, callback) {
        this.requestWithCallback("POST", process.env.REACT_APP_SERVER_BASE + "message", callback, {
            "message": message
        })
    }

    requestWithCallback(method, url, callback, data=null) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.responseText);
        };

        xmlHttp.open(method, url, true); // true for asynchronous
        xmlHttp.send(data);
    }

    render() {
        console.log(process.env.REACT_APP_SERVER_BASE);
        return (
            <MainPage/>
        );
    }
}

export default App;
