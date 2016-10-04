/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("CartController", [
        "$scope",
        function ($scope) {
            $scope.title = "Cart";

            $scope.removeFromCart = function (index) {
                $scope.cart.splice(index, 1);
            }
        }
    ])