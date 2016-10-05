/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Boots";
        }
    ]);