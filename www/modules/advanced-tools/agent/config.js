
angular.module('vxl-mobile.agent', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.agentList', {
        url: '/agent',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/agent/partials/agent-list.html',
            controller: 'agentListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/agent/controllers/agent-list.js',
                                'modules/advanced-tools/agent/services/agent-service.js']
                    }]);
                }]
            }
           }
        }
    })
    .state('app.agentAdd', {
        url: '/agent-add',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/agent/partials/agent-add.html',
            controller: 'agentAddCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/agent/controllers/agent-add.js',
                                'modules/advanced-tools/agent/services/agent-service.js']
                    }]);
                }]
            }
           }
        }
     }) 
    .state('app.agentEdit', {
        url: '/agent-edit/:agentId',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/agent/partials/agent-edit.html',
            controller: 'agentEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/agent/controllers/agent-edit.js',
                                'modules/advanced-tools/agent/services/agent-service.js']
                    }]);
                }]
            }
           }
        }
    })
     .state('app.agentFilter', {
        url: '/agent-filter',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/agent/partials/agent-filter.html',
            controller: 'agentFilterCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/agent/controllers/agent-filter.js',
                                'modules/advanced-tools/agent/services/agent-service.js']
                    }]);
                }]
            }
           }
        }
    });
});
