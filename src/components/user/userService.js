angular.module('components.userService', [])
    .service('UserService', ['$http', function ($http) {
        var UserService = {};
        UserService.getUsers = function () {
            return $http.get('localhost:3000/name/')
                .then(function(res) {
                    return res.data;
                });
        };
        return UserService;
    }]);
