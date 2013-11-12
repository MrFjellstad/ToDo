'use strict';

angular.module('todoApp')
    .controller('MainCtrl', function ($scope, Todos, Serverevents, Websocketevents) {
        $scope.alerts = [];

        var messageCallback = function (data) {
            $scope.alerts.push({text:data.text, done:data.done});
            $scope.$apply();
        };

        var websocketCallback = function (data) {
            var parsedData = JSON.parse(data);
            $scope.todos.push({text:parsedData.text, done:parsedData.done});
            $scope.$apply();
        };

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});

            Websocketevents.send($scope.todoText);

            $scope.todoText = '';

        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) {
                    $scope.todos.push(todo);
                }
            });
        };

        $scope.todos = Todos.getTodos();

        Serverevents.connect();

        Serverevents.subscribeMessage(messageCallback);

        Websocketevents.connect();

        Websocketevents.subscribe(websocketCallback);

        console.log('MainCtrl running');
    });
