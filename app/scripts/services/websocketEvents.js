'use strict';

angular.module('todoApp')
    .service('Websocketevents', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var Websocketevents = {},
            socket,
            lastSendt;

        Websocketevents.connect = function () {
            if (socket) {
                return;
            }
            socket = new WebSocket('ws://localhost:8080');

            socket.onopen = function() {
                console.log('Socket has been opened!');
            };
        };

        Websocketevents.subscribe = function (callback) {
            socket.onmessage = function(msg) {
                var recievedObject = JSON.parse(msg.data);
                console.log('Recieved ' + msg.data);
                if (recievedObject.token !== lastSendt) {
                    callback(recievedObject);
                }
            };
        };

        Websocketevents.send = function (message) {
            var messageObject = {};

            lastSendt = Math.random();

            messageObject = {
                token : lastSendt,
                message : message
            };

            socket.send(JSON.stringify(messageObject));
        };

        return Websocketevents;
    });
