/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("CartController", [
        "$scope",
        function ($scope) {
            $scope.title = "Cart";
            

            $scope.reduceAmount = function (index, product) {
                $scope.cart.splice(index, 1);
                
            }

            $scope.addAmount = function (product) {
                $scope.cart.push(product);
                

                //if ($scope.cart[index].amount + number > 0) {
                //    $scope.cart[index].amount += number;
                //}
            }

            $scope.loadCartProducts = function () {
                return $scope.cart;
            }



            //$scope.loadCartProducts = function () {
            //    $scope.data.cart.forEach(function (cartItem) {
            //        var product = $scope.getProduct(cartItem.productId);
            //        if (!!product) {
            //            $scope.cartProducts.push(product);
            //        } 
            //    });
            //}

            //$scope.getProduct = function (productId) {
            //    var retProduct = null;
            //    $scope.db.products.some(function (product, index, array) {
            //        var found = (product.id === productId);
            //        if (found) {
            //            retProduct = product;
            //        }
            //        return found;
            //    });
            //    return retProduct;
            //}

            $scope.loadCartProducts();
            console.log($scope.cart);
        }
    ]);