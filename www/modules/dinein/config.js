angular.module('vxl-mobile.dinein', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
	.state('app.dinein', {
	    url: '/dinein',
	    views: {
	      'dineinContent': {
	        templateUrl: 'modules/dinein/partials/dinein.html',
	        controller: 'dineinCtrl',
	        resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js', 'modules/dinein/controllers/dinein.js']
                    }]);
                }]
            }
	       }
	    }
	});
    
});