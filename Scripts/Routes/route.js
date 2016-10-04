/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider

                .when("/", {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: "Home"
                })
                .when("/Products", {
                    templateUrl: "Views/Products.html",
                    controller: "ProductsController",
                    caseInsensitiveMatch: true,
                    activeTab: "Products"
                })
                .when("/Product/:id", {
                    templateUrl: "Views/Product.html",
                    controller: "ProductController",
                    caseInsensitiveMatch: true,
                    activeTab: "Products"
                })
                .when("/Cart", {
                    templateUrl: "Views/Cart.html",
                    controller: "CartController",
                    caseInsensitiveMatch: true,
                    activeTab: "Cart"
                })
        }
    ])