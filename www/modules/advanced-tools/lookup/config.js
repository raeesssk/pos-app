
angular.module('vxl-mobile.lookup', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.lookupList', {
        url: '/lookup',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/lookup/partials/lookup-list.html',
            controller: 'lookupListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/lookup/controllers/lookup-list.js',
                                'modules/advanced-tools/lookup/services/lookup-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.lookupAdd', {
        url: '/lookup-add',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/lookup/partials/lookup-add.html',
            controller: 'lookupAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/lookup/controllers/lookup-add.js',
                                'modules/advanced-tools/lookup/services/lookup-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.lookupEditDetail', {
        url: '/lookup-edit-detail',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/lookup/partials/lookup-edit-detail.html',
            controller: 'lookupEditDetailCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/lookup/controllers/lookup-edit-detail.js',
                                'modules/advanced-tools/lookup/services/lookup-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.lookupEditValue', {
        url: '/lookup-edit-value',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/lookup/partials/lookup-edit-value.html',
            controller: 'lookupEditValueCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/lookup/controllers/lookup-edit-value.js',
                                'modules/advanced-tools/lookup/services/lookup-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.lookupEditDetailEdit', {
        url: '/lookup-edit-detail-edit/:name',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/lookup/partials/lookup-edit-detail-edit.html',
            controller: 'lookupEditDetailEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/lookup/controllers/lookup-edit-detail-edit.js',
                                'modules/advanced-tools/lookup/services/lookup-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.lookupEdit', {
        url: '/lookup-edit/:name',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/lookup/partials/lookup-edit.html',
            controller: 'lookupEditCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/lookup/controllers/lookup-edit.js',
                                'modules/advanced-tools/lookup/services/lookup-service.js',]
                    }]);
                }]
            }
           }
        }
    });
});