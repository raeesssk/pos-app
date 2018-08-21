
angular.module('vxl-mobile.authentication', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.authenticationList', {
        url: '/authentication',
         cache: false,
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/authentications/partials/authentication-list.html',
            controller: 'autheticationListCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/authentications/controllers/authentication-list.js',
                                'modules/administration/authentications/services/authentication-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.authenticationAdd', {
        url: '/add-authentication',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/authentications/partials/authentication-add.html',
            controller: 'authenticationAddCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/authentications/services/authentication-service.js',
                                'modules/administration/authentications/controllers/authentication-add.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.authenticationEdit', {
        url: '/edit-authentication/:authid',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/authentications/partials/authentication-edit.html',
            controller: 'authenticationEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/authentications/services/authentication-service.js',
                                'modules/administration/authentications/controllers/authentication-edit.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.authenticationFilter', {
        url: '/filter-authentication',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/authentications/partials/authentication-filter.html',
            controller: 'authenticationFilterCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/authentications/services/authentication-service.js',
                                'modules/administration/authentications/controllers/authentication-filter.js']
                    }]);
                }]
            }
           }
        }
    });
});