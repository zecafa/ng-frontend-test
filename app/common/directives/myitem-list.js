(function(){
    'use strict';
    /**
     * This is a sample directive
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Jose Carlos Fernandez
     */
    angular.module('common').directive('myitemList', function() {
        var items = [{
                    "id": 11,
                    "title": "nulla exercitation ut ea elit",
                    "description": "Cillum laborum mollit non laboris labore commodo magna laboris magna. Incididunt occaecat laborum aliqua id duis in. Elit commodo magna reprehenderit dolore nostrud ipsum ullamco aliquip. Exercitation qui est do exercitation quis esse reprehenderit aute qui et.\r\n",
                    "category": "apple",
                    "image": "apple.png"
                }, {
                    "id": 12,
                    "title": "qui id duis cillum aute",
                    "description": "In laborum ut aliquip consequat ad aute quis commodo velit ea officia irure laborum consequat. Quis dolor eu eu ex tempor laboris. Irure quis fugiat dolore qui est exercitation pariatur aliquip culpa sit aliquip. Culpa duis eiusmod incididunt commodo eiusmod fugiat amet proident labore culpa adipisicing est nisi. Labore ullamco anim quis cupidatat nostrud reprehenderit cupidatat fugiat. Velit est aliquip ullamco ut sunt enim non. Ea est magna dolore esse voluptate et.\r\n",
                    "category": "apple",
                    "image": "apple.png"
                }];

        //TODO: Implement your complex directive logic here
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: 'common/directives/myitem-list.html',
            link: function(scope, element, attrs, fn) {
                scope.items = items;
            }            
        };

    });

}());
