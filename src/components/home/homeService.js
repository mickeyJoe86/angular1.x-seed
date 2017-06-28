angular.module('components.homeService', [])
    .service('HomeService', [function () {
        // this.getUser = function() {
        //     var deferred = $q.defer();
        //     $http({
        //         url: '/name',
        //         method: 'GET'
        //     }).then(function(data){
        //         deferred.resolve(data);
        //     });
        //     return deferred.promise;
        // }

        var HomeService = {};

        var userList = [
            {
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane'
            },
            {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob'
            },
            {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'jimbo'
            },
            {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill'
            }
        ];

        HomeService.getAll = function () {
            return userList;
        };

        HomeService.getById = function (id) {
            return userList.find(function (user) {
                return user.id === id;
            });
        };

        return HomeService;
    }]);
