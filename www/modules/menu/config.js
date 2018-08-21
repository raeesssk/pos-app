angular.module('vxl-mobile.menu', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state('app.admin', {
	    url: '/admin',
	    views: {
	      'menuContent': {
	        templateUrl: 'modules/menu/partials/admin.html',
	        controller: 'adminMenuCtrl',
	        resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/menu/controllers/admin.js']
                    }]);
                }]
            }
	       }
	    }
	})
	.state('app.advancedTools', {
	    url: '/advanced-tools',
	    views: {
	      'menuContent': {
	        templateUrl: 'modules/menu/partials/advanced-tools.html',
	        controller: 'advanceToolMenuCtrl',
	        resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/menu/controllers/advanced-tool.js']
                    }]);
                }]
            }
	       }
	    }
	});
    
});