/// <reference path="angularjs.min.js" />


var myApp = angular.module('myModule', []);

//Khai báo nặc danh
myApp.controller('myController', function($scope, $rootScope) {
    // $scope.message = "AngularJs Không Khó Đâu Nhỉ ????";
    $rootScope.message = "AngularJs Không Khó Đâu Nhỉ ???"
});


//Khai báo nặc danh test4
myApp.controller('topController', function($scope, $rootScope) {
    // $scope.message = "AngularJs Không Khó Đâu Nhỉ ???";
    $scope.message = "AngularJs Không Khó Đâu Nhỉ ???."
}).directive("welcomeTo", function() {
    return {
        templateUrl: "/TestSize/1.html"
    }
});

//Khai báo tường minh.
// myApp.controller('myController',myController);
// function myController($scope){
//     $scope.message = "AngularJs Không Khó Đâu Nhỉ ???"
// }



//test3
myApp.controller('myController1', function($scope) {
    var smile = {
        name: "Cao Bạch Đệ",
        age: 20,
        gender: "Male",
        anh: 'https://bizweb.dktcdn.net/100/409/790/products/iphone-12-pro-blue-hero-e917fdce-eb1e-41b8-b6ab-c41f5df87cd2-1368ec6b-ef67-4dc0-86bc-3ce38216ae6d-27b7ef4e-dd6d-4bfd-8d8b-60755201e890-7af329e3-df4d-4fd5-96c5-8ea694ddc0e5.png?v=1622633820043'
    }
    $scope.smile = smile;


    $scope.sayhe = function() {
        $scope.smile.name = "Hello " + $scope.smile.name;
    }
});

//test4
myApp.controller('myController2', function($scope) {

    $scope.name = "Cao Bạch Dung"


    $scope.sayhe = function() {
        $scope.name = "Hello " + $scope.name;
    }
});

myApp.controller('myController3', function($scope) {
    var countries = [{
        name: "Hello",
        cities: {
            name: "HiHi"
        }
    }]
})