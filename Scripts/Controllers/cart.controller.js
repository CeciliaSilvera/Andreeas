/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("CartController", [
        "$scope",
        function ($scope) {
            $scope.title = "Cart";
            $scope.cartProducts = [];

            $scope.removeFromCart = function (index) {
                $scope.cart.splice(index, 1);
            }

            $scope.changeAmount = function (index, number) {
                if ($scope.cart[index].amount + number > 0) {
                    $scope.cart[index].amount += number;
                }
            }

            $scope.loadCartProducts = function () {
                $scope.data.cart.forEach(function (cartItem) {
                    var product = $scope.getProduct(cartItem.productId);
                    if (!!product) {
                        $scope.cartProducts.push(product);
                    } 
                });
            }

            $scope.getProduct = function (productId) {
                var retProduct = null;
                $scope.db.products.some(function (product, index, array) {
                    var found = (product.id === productId);
                    if (found) {
                        retProduct = product;
                    }
                    return found;
                });
                return retProduct;
            }

            $scope.loadCartProducts();
        }
    ])