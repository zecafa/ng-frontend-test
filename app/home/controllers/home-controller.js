(function(){
    'use strict';

    /**
     * @author: Jose Carlos Fernandez
     */
    angular.module('home').controller('homeController', function($scope, itemService) {
        itemService.getToday().success(function(data){
            $scope.todayItems = data;
        });
        itemService.getFavourites().success(function(data){
            $scope.favItems = data;
        });

        $scope.$on('REFRESH_FAVITEMS_LIST', function() {
            itemService.getFavourites().success(function(data){
                $scope.favItems = data;
            });            
        });
    });

})();
