angular.module('vxl-mobile.kitchen', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('app.pendingList', {
        url: '/pending',
        views: {
          'pendingOrder': {
            templateUrl: 'modules/kitchen/partials/pending-list.html',
            controller: 'pendingListCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/kitchen/controllers/pending-list.js']
                    }]);
                }]
            }
           }
        }
    }).state('app.completeList', {
        url: '/completed',
        views: {
          'completeOrder': {
            templateUrl: 'modules/kitchen/partials/completed-list.html',
            controller: 'completedListCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/kitchen/controllers/completed-list.js']
                    }]);
                }]
            }
           }
        }
    });
    
});