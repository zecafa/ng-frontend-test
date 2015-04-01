(function() {
    'use strict';
    var data = [{
        "id": 0,
        "title": "ipsum laborum reprehenderit eu aute",
        "description": "Cillum nostrud do in deserunt voluptate nisi ad. Irure reprehenderit aliqua irure adipisicing Lorem. Est aute amet ea ex anim aliquip enim veniam.\r\n",
        "category": "lemon",
        "image": "lemon.png"
    }, {
        "id": 1,
        "title": "irure ad enim occaecat nulla",
        "description": "Nulla eiusmod ad dolore consectetur eu eu labore enim quis anim sit quis culpa in. In enim ipsum do excepteur anim ad non aute eu exercitation magna ea. Aliqua officia nostrud enim cillum.\r\n",
        "category": "apple",
        "image": "apple.png"
    }, {
        "id": 2,
        "title": "pariatur labore reprehenderit do adipisicing",
        "description": "Reprehenderit deserunt aliqua ullamco et excepteur aliqua. Ut reprehenderit ut commodo occaecat non ipsum nulla sunt veniam velit. Elit pariatur pariatur fugiat fugiat reprehenderit mollit et proident id incididunt labore. Sunt in sint proident Lorem sit ea sunt nulla. Irure sunt ipsum culpa aute laborum sunt nulla dolor duis enim.\r\n",
        "category": "cherry",
        "image": "cherry.png"
    }, {
        "id": 3,
        "title": "sit officia eu excepteur Lorem",
        "description": "Amet in incididunt culpa culpa commodo. Commodo excepteur est eiusmod duis commodo sunt laborum elit amet voluptate sint minim adipisicing magna. Id sunt ut magna elit qui eiusmod reprehenderit ad non id consequat nulla sint. Qui voluptate laboris culpa elit veniam sint culpa consectetur aute. Laboris minim anim ipsum ex do. Dolor cillum dolor nulla reprehenderit dolor esse.\r\n",
        "category": "cherry",
        "image": "cherry.png"
    }, {
        "id": 5,
        "title": "deserunt consequat sit in ut",
        "description": "Ex adipisicing aliqua tempor dolore quis do ex aliquip non proident ullamco excepteur magna sit. Veniam nisi labore mollit quis. Qui eu mollit ex laborum commodo qui ad ad mollit ea officia qui. Aliquip cillum aliquip voluptate consectetur id est cupidatat incididunt ipsum non adipisicing ut.\r\n",
        "category": "apple",
        "image": "apple.png"
    }, {
        "id": 6,
        "title": "ad irure tempor officia fugiat",
        "description": "Tempor reprehenderit elit nostrud exercitation nulla qui incididunt cupidatat Lorem veniam quis fugiat veniam. Labore Lorem esse adipisicing cupidatat mollit adipisicing velit ipsum irure reprehenderit commodo sit velit. Ad fugiat aliqua pariatur laboris exercitation elit exercitation qui reprehenderit nostrud esse amet proident. Ut nulla dolore ut aliquip qui velit magna elit tempor consectetur ullamco elit et duis. Esse cupidatat minim consectetur ex magna proident aute officia anim reprehenderit cillum. Elit officia magna qui dolore exercitation deserunt sit consectetur officia esse adipisicing sint esse quis. Qui sunt ad veniam consectetur exercitation labore minim consequat laboris quis.\r\n",
        "category": "apple",
        "image": "apple.png"
    }, {
        "id": 7,
        "title": "consequat excepteur dolore ipsum incididunt",
        "description": "Duis est est tempor officia sint. Aute qui cupidatat esse velit et id commodo sit occaecat exercitation exercitation dolore exercitation. Et ea sit ut elit eu irure Lorem in labore sit nostrud. Cillum occaecat proident sint ex veniam nulla.\r\n",
        "category": "cherry",
        "image": "cherry.png"
    }, {
        "id": 8,
        "title": "adipisicing dolor nostrud ullamco reprehenderit",
        "description": "Proident commodo enim ad aliqua consectetur mollit pariatur esse amet pariatur ex voluptate culpa. Eu consequat nostrud irure sunt id. Aliqua ut Lorem elit fugiat consequat eiusmod anim. Irure veniam occaecat aliqua dolore occaecat proident incididunt. Sint adipisicing cupidatat in eu.\r\n",
        "category": "cherry",
        "image": "cherry.png"
    }, {
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
    }, {
        "id": 13,
        "title": "proident dolore amet laborum incididunt",
        "description": "Amet reprehenderit culpa consequat ad consectetur aute nulla. Irure non ullamco cillum occaecat anim nulla in. Ipsum ipsum fugiat aliquip qui ea. Esse elit laboris excepteur sit ut magna officia. Nulla adipisicing Lorem occaecat quis occaecat reprehenderit dolor elit ipsum quis mollit Lorem eiusmod ut. Culpa reprehenderit reprehenderit amet dolor qui ipsum laborum cupidatat eu esse et.\r\n",
        "category": "lemon",
        "image": "lemon.png"
    }];
    /**
     * This is a sample module
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('backendMock', ['ngMockE2E']);
    angular.module('backendMock').run(function($httpBackend) {
        $httpBackend.whenGET(/items.*/).respond(function(method, url, data, headers) {
            return [200, {
                result: data,
                total: data.length
            }]
        });
        
        $httpBackend.whenGET(/.*/).passThrough();

    });
}());