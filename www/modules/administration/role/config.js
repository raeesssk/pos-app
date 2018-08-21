
angular.module('vxl-mobile.role', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.roleList', {
        url: '/role',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/role/partials/role-list.html',
            controller: 'roleListCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/role/services/role-service.js',
                                'modules/administration/role/controllers/role-list.js']
                    }]);
                }]
            }
           }
        }
    }) 
    .state('app.roleAdd', {
        url: '/add-role',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/role/partials/role-add.html',
            controller: 'roleAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/role/services/role-service.js',
                                'modules/administration/role/controllers/role-add.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.roleEdit', {
        url: '/edit-role/:id',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/role/partials/role-edit.html',
            controller: 'roleEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/role/services/role-service.js',
                                'modules/administration/groups/services/group-service.js',
                                'modules/administration/role/controllers/role-edit.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.roleFilter', {
        url: '/filter-role',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/role/partials/role-filter.html',
            controller: 'roleFilterCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/role/services/role-service.js',
                                'modules/administration/role/services/group-service.js',
                                'modules/administration/role/controllers/role-filter.js']
                    }]);
                }]
            }
           }
        }
    });
});


