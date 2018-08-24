angular.module('vxl-mobile.user', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('app.userList', {
	    url: '/users',
        cache: false,
	    views: {
	      'menuContent': {
	        templateUrl: 'modules/administration/user/partials/user-list.html',
	        controller: 'userListCtrl',
	        resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/user/services/user-service.js',
                                'modules/administration/user/controllers/user-list.js']
                    }]);
                }]
            }
	       }
	    }
	})
	.state('app.userAdd', {
	    url: '/add-users',
	    views: {
	      'menuContent': {
	        templateUrl: 'modules/administration/user/partials/user-add.html',
	        controller: 'userAddCtrl',
	        resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/user/services/user-service.js',
                                'modules/administration/user/controllers/user-add.js']
                    }]);
                }]
            }
	       }
	    }
	})
	.state('app.userEdit', {
	    url: '/edit-users/:id',
	    views: {
	      'menuContent': {
	        templateUrl: 'modules/administration/user/partials/user-edit.html',
	        controller: 'userEditCtrl',
	        resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/user/services/user-service.js',
                                'modules/administration/user/controllers/user-edit.js',
                                'modules/administration/user/controllers/user-add.js']
                    }]);
                }]
            }
	       }
	    }
	})
	.state('app.userFilter', {
	    url: '/filter-users',
	    views: {
	      'menuContent': {
	        templateUrl: 'modules/administration/user/partials/user-filter.html',
	        controller: 'userFilterCtrl',
	        resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                    	return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/user/services/user-service.js',
                                'modules/administration/user/controllers/user-filter.js']
                    }]);
                }]
            }
	       }
	    }
	})
    .state('app.userReset', {
        url: '/reset-users',
        views: {
          'menuContent': {
            templateUrl: 'modules/administration/user/partials/user-reset.html',
            controller: 'userresetCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/administration/user/services/user-service.js',
                                'modules/administration/user/controllers/user-reset.js']
                    }]);
                }]
            }
           }
        }
    });
});


