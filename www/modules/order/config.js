angular.module('vxl-mobile.order', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('app.orderList', {
        url: '/order',
        views: {
          'dineinContent': {
            templateUrl: 'modules/order/partials/order-list.html',
            controller: 'orderListCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/order/controllers/order-list.js']
                    }]);
                }]
            }
           }
        }
    }).state('app.orderAdd', {
        url: '/order/add',
        views: {
          'dineinContent': {
            templateUrl: 'modules/order/partials/order-add.html',
            controller: 'orderAddCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/order/controllers/order-add.js']
                    }]);
                }]
            }
           }
        }
    }).state('app.orderTotal', {
        url: '/order/total',
        views: {
          'billContent': {
            templateUrl: 'modules/order/partials/order-total.html',
            controller: 'orderTotalCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/order/controllers/order-total.js']
                    }]);
                }]
            }
           }
        }
    }).state('app.orderEdit', {
        url: '/edit-order/:omId',
        views: {
          'dineinContent': {
            templateUrl: 'modules/order/partials/order-edit.html',
            controller: 'orderEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/order/controllers/order-edit.js']
                    }]);
                }]
            }
           }
        }
    });
    
});