(function(){
    'use strict';

    /**
     * @author: Jose Carlos Fernandez
     */
    angular.module('home').controller('homeController', function($scope, itemService) {
        var myIds = [1,2];
        itemService.getToday().success(function(data){
            $scope.todayItems = data;
        });
        itemService.getByIds(myIds).success(function(data){
            $scope.favItems = data;
        });

    });

})();
