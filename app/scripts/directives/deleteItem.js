'use strict';

angular.module('todoApp')
  .directive('deleteItem', function () {
    return {
        template: '<a href="#" ng-click="deleteItem(list, item)">' +
                    'Delete' +
                    '</a>',
        restrict: 'E',
        replace: true,
        scope: {list: '=',
                item: '='},
        link: function (scope) {
            scope.deleteItem = function (list, item) {
                list.splice(list.indexOf(item),1);
            };
        }
    };
});
