(function(){
    'use strict';

    /**
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('results', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'restangular']);
    
    angular.module('results').config(function($routeProvider) {

        $routeProvider.when('/results',{
            templateUrl: 'results/templates/results-template.html',
            controller: 'resultsController'
            });
        /* Add New Routes Above */

    });
    

})();
