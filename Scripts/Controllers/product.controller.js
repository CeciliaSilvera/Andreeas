/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ProductController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {
            $scope.title = "Boot";

            $scope.product = $scope.products.filter(function (product) {
                return product.id == $routeParams.id;
            })[0];
        }
    ])