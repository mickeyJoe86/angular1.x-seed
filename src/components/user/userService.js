angular.module('components.userService', [])
    .service('UserService', ['$http', function ($http) {
        var API = 'http://pokeapi.co/api/v2/pokemon/';
        var UserService = {};

        UserService.findByName = function (name) {
            return $http.get(API + name)
                .then(function (res) {
                    return res.data;
                })
                .catch(function (res) {
                    return "Nope";
                });
        };

        return UserService;
    }]);
