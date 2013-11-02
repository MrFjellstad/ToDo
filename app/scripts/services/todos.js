'use strict';

angular.module('todoApp')
    .service('Todos', function () {
        var Todos = {};

        Todos.getTodos = function () {
            console.log("Hei");
            return [
                {text:'learn angular', done:true},
                {text:'build an angular app', done:false}
            ];
        };

        return Todos;
    });
