angular.module('shared.headerDirective', [])
    .directive('sharedHeader', [function(){
        return {
            templateUrl: './dist/shared/header/headerView.html'
        }
    }]);
