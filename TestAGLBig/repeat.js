(function() {
    var app = angular.module('myModule', []).controller('myController', ['$scope', function($scope) {
        var countries = [{
                name: "United States",
                cities: [{
                        name: "Hello World",
                        age: "20",
                        gender: "Male"
                    },

                ]
            },
            {
                name: "United Mate",
                cities: [{
                        name: "My World",
                        age: "21",
                        gender: "Male"
                    },

                ]
            },
            {
                name: "United Kill",
                cities: [{
                        name: "Text World",
                        age: "20",
                        gender: "FeMale"
                    },

                ]
            }

        ];
        $scope.countries = countries;
    }])
})();