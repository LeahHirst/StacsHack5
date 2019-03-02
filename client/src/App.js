import React, {Component} from 'react';
import './App.css';
import {MainPage} from "./views";

class App extends Component {

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
