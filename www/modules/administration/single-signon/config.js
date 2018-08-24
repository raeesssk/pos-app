
angular.module('vxl-mobile.single-signon', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.singlesignonList', {
        url: '/singlesignon',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/single-signon/partials/single-signon-list.html',
            controller: 'singlesignonListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/single-signon/controllers/single-signon-list.js',
                                'modules/administration/single-signon/services/single-signon-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.singlesignonAdd', {
        url: '/add-singlesignon',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/single-signon/partials/single-signon-add.html',
            controller: 'singlesignonAddCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/single-signon/controllers/single-signon-add.js',
                                'modules/administration/single-signon/services/single-signon-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.singlesignonEdit', {
        url: '/edit-singlesignon/:id',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/single-signon/partials/single-signon-edit.html',
            controller: 'singlesignonEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/single-signon/controllers/single-signon-edit.js',
                                'modules/administration/single-signon/services/single-signon-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.singlesignonFilter', {
        url: '/filter-singlesignon',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/single-signon/partials/single-signon-filter.html',
            controller: 'singlesignonFilterCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/single-signon/controllers/single-signon-filter.js',
                                'modules/administration/single-signon/services/single-signon-service.js']
                    }]);
                }]
            }
           }
        }
    });
});