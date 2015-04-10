(function() {
    'use strict';
    angular.module('common').filter('capitalize', function() {
        return function(input, scope) {
            return input ? input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase() : "";
        }
    });
})();