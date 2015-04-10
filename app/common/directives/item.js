(function(){
    'use strict';

    /**
     * This is a sample directive
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('common').directive('item', function(itemService,$route) {

        //TODO: Implement your complex directive logic here
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'common/directives/item.html',
            link: function(scope, element, attrs, fn) {
                scope.getFavImgSrc = function(){
                    return itemService.isFavourite(scope.item.id) ?
                        'assets/imgs/hearth_fav.png':
                        'assets/imgs/hearth.png';
                };
                scope.toggleFav = function() {
                    itemService.toggleFavourite(scope.item.id);
                    $route.reload();
                };
            }
        };

    });

})();
