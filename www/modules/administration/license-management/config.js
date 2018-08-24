angular.module('vxl-mobile.license-management', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('app.licenseManagement', {
	    url: '/license-management',
	    views: {
	      'menuContent': {
	        templateUrl: 'modules/administration/license-management/partials/license-management.html',
	        controller: 'licenseManagementCtrl',
	        resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/license-management/services/license-management-service.js',
                                'modules/administration/license-management/controllers/license-management.js']
                    }]);
                }]
            }
	       }
	    }
	});
});


