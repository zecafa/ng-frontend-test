(function(){
    'use strict';

    /**
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('home', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'restangular']);
    
    angular.module('home').config(function($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'home/templates/home-template.html',
            controller: 'homeController'
        });
        /* Add New Routes Above */

    });
    

})();
