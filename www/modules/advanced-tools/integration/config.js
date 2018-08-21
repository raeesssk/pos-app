
angular.module('vxl-mobile.integration', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.integrationList', {
        url: '/integration',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/integration/partials/integration-list.html',
            controller: 'integrationListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/integration/controllers/integration-list.js',
                                'modules/advanced-tools/integration/services/integration-service.js',]
                    }]);
                }]
            }
           }
        }
    });
});
