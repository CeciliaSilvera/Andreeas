/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ProductsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Boots";

            $scope.changeAmount = function (index, number) {
                if ($scope.cart[index].amount + number > 0)
                    $scope.cart[index].amount += number;
            }
        }
    ]);