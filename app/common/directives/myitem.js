(function(){
    'use strict';

    /**
     * This is a sample directive
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('common').directive('myitem', function() {

        //TODO: Implement your complex directive logic here
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'common/directives/myitem.html',
            link: function(scope, element, attrs, fn) {

            }
        };

    });

})();
