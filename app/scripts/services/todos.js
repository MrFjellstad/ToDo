'use strict';

angular.module('todoApp')
    .service('Todos', function () {
        var Todos = {},
            TodoData = [
                {text:'learn angular', done:true},
                {text:'build an angular app', done:false}
            ];

        Todos.getTodos = function () {
            return TodoData;
        };

        return Todos;
    });
