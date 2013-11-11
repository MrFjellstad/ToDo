'use strict';

angular.module('todoApp')
    .service('Serverevents', function () {
        var source,
            Serverevents = {},
            subscribeMessageReentry = false;
    // AngularJS will instantiate a singleton by calling "new" on this function

        Serverevents.connect = function () {
            if (source) {
                return;
            }

            source = new EventSource('/todo-server/serversideevent.php');

            source.addEventListener('open', function(e) {
              // Connection was opened.
            }, false);

            source.addEventListener('error', function(e) {
                if (e.readyState === EventSource.CLOSED) {
                // Connection was closed.
                }
            }, false);
        };

        Serverevents.subscribeMessage = function (callback) {
            if (subscribeMessageReentry) {
                return;
            }
            source.addEventListener('message', function(e) {
                var data = JSON.parse(e.data);
                if (!!data.text) {
                    console.log(data);
                    callback(data);
                }
            }, false);

            subscribeMessageReentry = true;
        };

        return Serverevents;
    });
