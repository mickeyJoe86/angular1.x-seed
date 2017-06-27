angular.module('components.homeComponent', [])
    .controller('HomeComponentController', ['HomeService',function (HomeService) {
       var self = this;
        HomeService.getUser().then(function(res){
            self.name = res.data.name;
            //console.log(res);
        });
    }]);
