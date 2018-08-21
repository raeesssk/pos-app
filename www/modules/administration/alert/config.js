
angular.module('vxl-mobile.alert', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.alertList', {
        url: '/alert',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/alert/partials/alert-list.html',
            controller: 'alertListCtrl',
            resolve: {
                  lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/alert/controllers/alert-list.js',
                                'modules/administration/alert/services/alert-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.alertAdd', {
        url: '/add-alert',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/alert/partials/alert-add.html',
            controller: 'alertAddCtrl',
            resolve: {
               lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/alert/services/alert-service.js',
                                'modules/administration/alert/controllers/alert-add.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.alertEdit', {
        url: '/edit-alert/:alertId',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/alert/partials/alert-edit.html',
            controller: 'alertEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/alert/services/alert-service.js',
                                'modules/administration/alert/controllers/alert-edit.js']
                    }]);
                }]
            }
           }
        }
    })
     .state('app.alertFilter', {
        url: '/filter-alert',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/alert/partials/alert-filter.html',
            controller: 'alertFilterCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/alert/services/alert-service.js',
                                'modules/administration/alert/controllers/alert-filter.js']
                    }]);
                }]
            }
           }
        }
    });
});