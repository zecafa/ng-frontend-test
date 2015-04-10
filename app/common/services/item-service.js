(function() {
    'use strict';
    /**
     * Get items by id's array
     * @param  {Array} ids
     * @return {Array}
     */
    // var getByIds = function(ids) {
    //     return $http({
    //         method: 'GET',
    //         url: '/items',
    //         params: {
    //             'id': ids.join()
    //         }
    //     });
    // };
    /**
     * This is a sample service
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('common').factory('itemService', function($http, $q, $localStorage) {
        return {
            /**
             * Get the lastest 3 items
             * @return {Array}
             */
            getToday: function() {
                return $http({
                    method: 'GET',
                    url: '/items',
                    params: {
                        'limit': 3,
                        'hideFavs': true
                    }
                });
            },
            /**
             * Get items filtered by search in category field
             * @param  {String} categorySearch
             * @return {Array}
             */
            searchCategory: function(categorySearch) {
                return $http({
                    method: 'GET',
                    url: '/items',
                    params: {
                        'filterCategory': categorySearch
                    }
                });
            },
            getFavourites: function() {
                var ids = $localStorage.favItems.join();
                var params = !! ids ? {
                    'id': ids
                } : {};
console.log(ids);                
                return $http({
                    method: 'GET',
                    url: '/items',
                    params: params
                });
            },
            isFavourite: function(id) {
                return $localStorage.favItems.indexOf(id) !== -1;
            },
            toggleFavourite: function(id) {
                var index = $localStorage.favItems.indexOf(id);
                if (index !== -1) {
                    $localStorage.favItems.splice(index, 1);
                } else {
                    $localStorage.favItems.push(id);
                }
            }
        };
    });
})();