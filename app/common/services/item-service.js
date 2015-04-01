(function(){
    'use strict';

    /**
     * This is a sample service
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('common').factory('itemService', function($http, $q) {

        return {
            /**
             * Get the lastest 3 items
             * @return {Array} 
             */
            getToday: function() {
                return $http.get('/items');
            },
            /**
             * Get items filtered by search in category field
             * @param  {String} categorySearch
             * @return {Array}
             */
            searchCategory: function(categorySearch) {
                return $http.get('/items?search='+categorySearch);
            },
            /**
             * Get items by id's array
             * @param  {Array} ids
             * @return {Array}
             */
            getByIds: function(ids) {
                return $http({
                    method: 'GET',
                    url: '/items',
                    params: {
                        'id[]': ids
                    }
                });
            }
        }
    });

})();