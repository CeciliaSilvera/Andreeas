
/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$route",
        "$location",
        function ($scope, $route, $location) {
            $scope.$route = $route;
            $scope.cart = [];
            $scope.data = {};
            $scope.db = {};

            $scope.go = function (url) {
                $location.path(url);
            }

            $scope.loadData = function () {
                var dataString = localStorage.getItem("data");
                if (dataString) {
                    $scope.data = JSON.parse(dataString);
                } else {
                    $scope.data.cart = [];
                    $scope.data.nextAvailableId = 0;
                }
            }

            $scope.saveData = function () {
                var jsonString = JSON.stringify($scope.data);
                localStorage.setItem("data", jsonString);
            }

            $scope.retrieveNextAvailableId = function () {
                var id = $scope.data.nextAvailableId++;
                $scope.saveData();
                return id;
            }

            //pt fiecare index i din arrayul $scope.data.cart, adica de la 0 pana la length-1, inaintind cate unul.
            $scope.addToCart = function (product) {
                $scope.cart.push(product);
            }

            $scope.db.categories = [
                { id: 1
                , name: "Chelsea boots"
                },
                { id: 2
                , name: "Ankle boots"
                }
            ];

            $scope.db.products = [
                { id: 1
                , name: "Meermin"
                , categoryId: 1
                , description: "Here is a new version of the chelsea boot, made in snuff suede & full rubber soles. This sophisticated chelsea boot is goodyear welted on the classic HIRO last. Finished with a full rubber sole, perfect for the colder season!"
                , src: "../Gallery/Chelsea boot/fall-boots-gear-patrol-meermin2_166$.jpg"
                },
                { id: 2
                , name: "Common Projects"
                , categoryId: 1
                , description: "Quality leathers and hard-wearing soles are employed in the simple forms – the only superfluous decoration being the signature model number stamped near the back of the shoe."
                , src: "../Gallery/Chelsea boot/fall-boots-gear-patrol-commonprojects_498$.jpg"
                },
                { id: 3
                , name: "Lanvin"
                , categoryId: 1
                , description: "With a design as classic as the Chelsea boot, discreet details make all the difference. This leather pair from Parisian label Lanvin have smooth, fine-grain panels at the front, with contrasting pebbled backs."
                , src: "../Gallery/Chelsea boot/fall-boots-gear-patrol-lanvin_584$.jpg"
                },
                { id: 4
                , name: "Helm"
                , categoryId: 2 //to change description
                , description: "With a design as classic as the Chelsea boot, discreet details make all the difference. This leather pair from Parisian label Lanvin have smooth, fine-grain panels at the front, with contrasting pebbled backs."
                , src: "../Gallery/Ankle boot/fall-boots-gear-patrol-Helm_569$.jpg"
                },
                { id: 5
                , name: "Zara"
                , categoryId: 2
                , description: "With a design as classic as the Chelsea boot, discreet details make all the difference. This leather pair from Parisian label Lanvin have smooth, fine-grain panels at the front, with contrasting pebbled backs."
                , src: "../Gallery/Ankle boot/fall-boots-gear-patrol-zara_139$.jpg"
                },
                { id: 6
                , name: "Saint Laurent"
                , categoryId: 2
                , description: "With a design as classic as the Chelsea boot, discreet details make all the difference. This leather pair from Parisian label Lanvin have smooth, fine-grain panels at the front, with contrasting pebbled backs."
                , src: "../Gallery/Ankle boot/SLP-Gear-Patrol-Saint Laurent_895$.jpg"
                }
            ]   

            $scope.loadData();
        }
    ]);