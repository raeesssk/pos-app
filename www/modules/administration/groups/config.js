angular.module('vxl-mobile.group', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.groupList', {
        url: '/group',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/groups/partials/group-list.html',
            controller: 'groupListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/groups/controllers/group-list.js',
                                'modules/administration/groups/services/group-service.js',]
                    }]);
                }]
            }
           }
        }
    }) 
    .state('app.groupAdd', {
        url: '/add-groups',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/groups/partials/group-add.html',
            controller: 'groupAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/groups/services/group-service.js',
                                'modules/administration/groups/controllers/group-add.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.groupEdit', {
        url: '/edit-groups/:groupId',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/groups/partials/group-edit.html',
            controller: 'groupEditCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/user/services/user-service.js',
                                 'modules/administration/groups/services/group-service.js',
                                'modules/administration/role/services/role-service.js',
                                'modules/administration/groups/controllers/group-edit.js']
                    }]);
                }]
            }
           }
        }
    })
     .state('app.groupClone', {
        url: '/clone-groups/:groupId',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/groups/partials/group-clone.html',
            controller: 'groupCloneCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/groups/services/group-service.js',
                                'modules/administration/groups/services/role-service.js',
                                'modules/administration/groups/controllers/group-clone.js']
                    }]);
                }]
            }
           }
        }
    })

    .state('app.groupFilter', {
        url: '/filter-groups',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/groups/partials/group-filter.html',
            controller: 'groupFilterCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/groups/services/group-service.js',
                                'modules/administration/groups/controllers/group-filter.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.groupEditSearchUser', {
        url: '/edit-usersearch-groups',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/groups/partials/group-edit-user-search.html',
            controller: 'groupEditUserSearchCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'components/services/factory.js',
                                'modules/administration/groups/services/group-service.js',
                                'modules/administration/groups/controllers/group-edit-user-search.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.groupEditSearchRole', {
        url: '/edit-rolesearch-groups',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/groups/partials/group-edit-role-search.html',
            controller: 'groupEditRoleSearchCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'components/services/factory.js',
                                'modules/administration/role/services/role-service.js',
                                'modules/administration/groups/controllers/group-edit-role-search.js']
                    }]);
                }]
            }
           }
        }
    });
});