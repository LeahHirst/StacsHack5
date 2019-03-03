import {Component} from "react";

export function getSuggestions(message, callback) {
    this.requestWithCallback("GET", process.env.REACT_APP_SERVER_BASE + "api?message=" + message, callback)
}

export function requestWithCallback(method, url, onSuccess, onError, data = null) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                onSuccess(JSON.parse(xmlHttp.responseText))
            } else if (xmlHttp > 299) {
                onError(xmlHttp.responseText)
            }
        }
    };

    xmlHttp.open(method, url, true); // true for asynchronous
    xmlHttp.send(data);
}