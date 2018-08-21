
angular.module('vxl-mobile.backup', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.backupList', {
        url: '/backup',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/backup/partials/backup-list.html',
            controller: 'backupListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/backup/controllers/backup-list.js',
                                'modules/administration/backup/services/backup-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.backupAdd', {
        url: '/add-backup',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/backup/partials/backup-add.html',
            controller: 'backupAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/backup/services/backup-service.js',
                                'modules/administration/backup/controllers/backup-add.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.backupEdit', {
        url: '/edit-backup/:backupId',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/backup/partials/backup-edit.html',
            controller: 'backupEditCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/backup/services/backup-service.js',
                                'modules/administration/backup/controllers/backup-edit.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.backupFilter', {
        url: '/filter-backup',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/backup/partials/backup-filter.html',
            controller: 'backupFilterCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/backup/services/backup-service.js',
                                'modules/administration/backup/controllers/backup-filter.js']
                    }]);
                }]
            }
           }
        }
    });
});