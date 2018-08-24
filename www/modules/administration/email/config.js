
angular.module('vxl-mobile.email', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.emailList', {
        url: '/email',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/email/partials/email-list.html',
            controller: 'emailListCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/email/controllers/email-list.js',
                                'modules/administration/email/services/email-service.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.emailAdd', {
        url: '/add-email',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/email/partials/email-add.html',
            controller: 'emailAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/email/services/email-service.js',
                                'modules/administration/email/controllers/email-add.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.emailEdit', {
        url: '/edit-email/:id',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/email/partials/email-edit.html',
            controller: 'emailEditCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/email/services/email-service.js',
                                'modules/administration/email/controllers/email-edit.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.emailTest', {
        url: '/test-email',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/email/partials/email-test.html',
            controller: 'emailTestCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/email/services/email-service.js',
                                'modules/administration/email/controllers/email-test.js']
                    }]);
                }]
            }
           }
        }
    })

    .state('app.emailFilter', {
        url: '/filter-email',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/email/partials/email-filter.html',
            controller: 'emailFilterCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/email/services/email-service.js',
                                'modules/administration/email/controllers/email-filter.js']
                    }]);
                }]
            }
           }
        }
    }) ;
});