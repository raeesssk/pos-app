
angular.module('vxl-mobile.mapping', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.mappingList', {
        url: '/mapping',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/mapping/partials/mapping-list.html',
            controller: 'mappingListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/mapping/controllers/mapping-list.js',
                                'modules/advanced-tools/mapping/services/mapping-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.mappingAdd', {
        url: '/mapping-add',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/mapping/partials/mapping-add.html',
            controller: 'mappingAddCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/mapping/controllers/mapping-add.js',
                                'modules/advanced-tools/mapping/services/mapping-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.mappingAddSource', {
        url: '/mapping-add-source',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/mapping/partials/mapping-add-source.html',
            controller: 'mappingAddSourceCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/mapping/controllers/mapping-add-source.js',
                                'modules/advanced-tools/mapping/services/mapping-service.js',
                                'modules/advanced-tools/mapping/services/mapping-feed-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.mappingAddQuery', {
        url: '/mapping-add-query',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/mapping/partials/mapping-add-query.html',
            controller: 'mappingAddQueryCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/mapping/controllers/mapping-add-query.js',
                                'modules/advanced-tools/mapping/services/mapping-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.mappingAddMapping', {
        url: '/mapping-add-mapping',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/mapping/partials/mapping-add-mapping.html',
            controller: 'mappingAddMappingCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/mapping/controllers/mapping-add-mapping.js',
                                'modules/advanced-tools/mapping/services/mapping-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.mappingAddSummary', {
        url: '/mapping-add-summary',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/mapping/partials/mapping-add-summary.html',
            controller: 'mappingAddSummaryCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/mapping/controllers/mapping-add-summary.js',
                                'modules/advanced-tools/mapping/services/mapping-service.js']
                    }]);
                }]
            }
           }
        }
    })
 .state('app.mappingFilter', {
        url: '/mapping-filter',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/mapping/partials/mapping-filter.html',
            controller: 'mappingFilterCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/mapping/controllers/mapping-filter.js',
                                'modules/advanced-tools/mapping/services/mapping-service.js']
                    }]);
                }]
            }
           }
        }
    });
});