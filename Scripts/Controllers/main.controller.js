/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$route",
        "$location",
        function ($scope, $route, $location) {
            $scope.$route = $route;
            $scope.products = [];
            $scope.cart = [];
            $scope.nextAvailableId = 0;

            $scope.go = function (url) {
                $location.path(url);
            }

            $scope.loadProducts = function () {
                var dataString = localStorage.getItem("products");

                if (dataString) {
                    $scope.products = JSON.parse(dataString);
                }
            }

            $scope.loadNextAvailableId = function () {
                var dataString = localStorage.getItem("nextAvailableId");

                if (dataString) {
                    $scope.nextAvailableId = JSON.parse(dataString);
                }
            }

            $scope.retrieveNextAvailableId = function () {
                var id = $scope.nextAvailableId++;
                $scope.saveNextAvailableId();
                return id;
            }

            $scope.saveNextAvailableId = function () {
                var jsonString = JSON.stringify($scope.nextAvailableId);
                localStorage.setItem("nextAvailableId", jsonString);
            }

            $scope.saveProducts = function () {
                var jsonString = JSON.stringify($scope.products);
                localStorage.setItem("products", jsonString);
            }

            $scope.addToCart = function (product) {
                $scope.cart.push({
                    amount: 1,
                    product: product
                });
            };

            $scope.loadNextAvailableId();
            $scope.loadProducts();
        }
    ]);