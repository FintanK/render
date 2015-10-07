'use strict';

angular.module('Scaffold')

    .controller('MainController',[
        '$scope', 'ngSanitize',
        function MainController (
            $scope, ngSanitize) {

            $scope.test = 'Hello world';
        }]
);