(function(){
    'use strict';

    /**
     * This is a sample controller
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('results').controller('resultsController', function($scope, $routeParams, itemService) {
        $scope.text = $routeParams.text;
        itemService.searchCategory($scope.text).success(function(data){
            $scope.resultItems = data;
        });
    });

}());
