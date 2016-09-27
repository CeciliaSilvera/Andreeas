/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$route",
        "$location",
        function ($scope, $route, $location) {
            $scope.$route = $route;

            $scope.go = function (url) {
                $location.path(url);
            }
        }
    ])