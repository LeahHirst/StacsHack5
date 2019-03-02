import React, {Component} from 'react';
import './App.css';
import {MainPage} from "./views";

class App extends Component {

    getMessage(callback) {
        get(".../message", callback)
    }

    get(url, callback) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.responseText);
        };

        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    }

    render() {
        return (
            <MainPage/>
        );
    }
}

export default App;
