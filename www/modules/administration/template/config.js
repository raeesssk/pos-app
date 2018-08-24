
angular.module('vxl-mobile.template', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.templateList', {
        url: '/template',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/template/partials/template-list.html',
            controller: 'templateListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/template/services/template-services.js',
                                'modules/administration/template/controllers/template-list.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.templateAdd', {
        url: '/add-template',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/template/partials/template-add.html',
            controller: 'templateAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/template/services/template-services.js',
                                'modules/administration/template/controllers/template-add.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.templateEdit', {
        url: '/edit-template/:templateId',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/template/partials/template-edit.html',
            controller: 'templateEditCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/template/services/template-services.js',
                                'modules/administration/template/controllers/template-edit.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.templateFilter', {
        url: '/filter-template',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/template/partials/template-filter.html',
            controller: 'templateFilterCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/template/services/template-services.js',
                                'modules/administration/template/controllers/template-filter.js']
                    }]);
                }]
            }
           }
        }
    });
});


