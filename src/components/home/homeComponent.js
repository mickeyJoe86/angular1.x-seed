angular.module('components.homeComponent', [])
    .controller('HomeComponentController', ['HomeService', function (HomeService) {
       var self = this;
        self.users = HomeService.getAll();
        
    }]);
