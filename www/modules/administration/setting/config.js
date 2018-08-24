
angular.module('vxl-mobile.setting', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.settingList', {
        url: '/setting',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/setting/partials/setting-list.html',
            controller: 'settingListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/setting/controllers/setting-list.js',
                                'modules/administration/setting/services/setting-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.settingAdd', {
        url: '/setting-add',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/setting/partials/setting-add.html',
            controller: 'settingAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/setting/controllers/setting-add.js',
                                'modules/administration/setting/services/setting-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.settingEdit', {
        url: '/setting-edit/:settingId',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/setting/partials/setting-edit.html',
            controller: 'settingEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/setting/controllers/setting-edit.js',
                                'modules/administration/setting/services/setting-service.js',]
                    }]);
                }]
            }
           }
        }
    });
});