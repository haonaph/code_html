var myApp = angular.module('myApp', []);

myApp.controller('shopContrl', function($scope) {
    $scope.items = [{
        name: 'Iphone',
        price: 800
    }, {
        name: 'Oppo',
        price: 500
    }, {
        name: 'Xiaomi',
        price: 1000
    }];

    $scope.getAmouts = function() {
        var amouts = 0;

        $scope.items.forEach(element => {
            if (element.buy == true) {
                amouts += element.price * element.qty;
            }
        });
        return amouts;
    }
})