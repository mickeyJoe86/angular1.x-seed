angular.module('shared.footerDirective', [])
    .directive('sharedFooter', [function(){
        return {
            templateUrl: './dist/shared/footer/footerView.html'
        }
    }]);
