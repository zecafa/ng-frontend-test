(function(){
    'use strict';

    /**
     * This is a sample module for all application level common tasks
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('common', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'restangular', 'ngStorage']);
    
    angular.module('common').run(function($localStorage) {
        $localStorage.$default({
            favItems: []
        });
    });


}());
