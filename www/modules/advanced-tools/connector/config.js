
angular.module('vxl-mobile.connector', ['oc.lazyLoad'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.connectorList', {
        url: '/connector',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-list.html',
            controller: 'connectorListCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-list.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorAddType', {
        url: '/connector-add-connector-type',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-connector-type.html',
            controller: 'connectorAddConnectorTypeCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-connector-type.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorAdd', {
        url: '/connector-add',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add.html',
            controller: 'connectorAddCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
     .state('app.connectorAddconnector', {
        url: '/connector-add-connector',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-connector.html',
            controller: 'connectorAddConnectorCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-connector.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAdddatabase', {
        url: '/connector-add-database',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-database.html',
            controller: 'connectorAddDatabaseCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-database.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorAddrest', {
        url: '/connector-add-rest',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-rest.html',
            controller: 'connectorAddRestCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-rest.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAddftp', {
        url: '/connector-add-ftp',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-ftp.html',
            controller: 'connectorAddFTPCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-ftp.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAddemail', {
        url: '/connector-add-email',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-email.html',
            controller: 'connectorAddEmailCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-email.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorAddfile', {
        url: '/connector-add-file',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-email.html',
            controller: 'connectorAddFileCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-file.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAddjira', {
        url: '/connector-add-jira',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-jira.html',
            controller: 'connectorAddJiraCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-jira.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAddfoundation', {
        url: '/connector-add-foundation',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-foundation.html',
            controller: 'connectorAddFoundationCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-foundation.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    
    .state('app.connectorAddservice', {
        url: '/connector-add-service',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-service.html',
            controller: 'connectorAddServiceCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-service.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAddrequirment', {
        url: '/connector-add-requirment',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-requirment.html',
            controller: 'connectorAddRequirmentCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-requirment.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAddquality', {
        url: '/connector-add-quality',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-quality.html',
            controller: 'connectorAddQualityCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-quality.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorAddibm', {
        url: '/connector-add-ibm',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-add-ibm.html',
            controller: 'connectorAddIbmCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-add-ibm.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorFilter', {
        url: '/connector-filter',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-filter.html',
            controller: 'connectorFilterCtrl',
            resolve: {
                 lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-filter.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorEditdatabase', {
        url: '/connector-edit-database/:id',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-edit-database.html',
            controller: 'connectorEditCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-edit-database.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })

    .state('app.connectorEditemail', {
        url: '/connector-edit-email',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-edit-email.html',
            controller: 'connectorEditemailCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-edit-email.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorEditftp', {
        url: '/connector-edit-ftp',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-edit-ftp.html',
            controller: 'connectorEditFTPCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-edit-ftp.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorEditjira', {
        url: '/connector-edit-jira',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-edit-jira.html',
            controller: 'connectorEditJiraCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-edit-jira.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    })
    .state('app.connectorEditrest', {
        url: '/connector-edit-rest',
        views: {
          'menuContent': {
            templateUrl: 'modules/advanced-tools/connector/partials/connector-edit-rest.html',
            controller: 'connectorEditRestCtrl',
            resolve: {
                lazy: ['$ocLazyLoad',"$q", "$location","$rootScope", function ($ocLazyLoad, $q, $location, $rootScope) {
                        if (!localStorage.getItem("pos_admin_access_token")) {
                            window.location = 'login.html';
                            return $q.defer.promise;
                        }
                        return $ocLazyLoad.load([{
                        name: 'vxl-mobile',
                        files: ['components/services/services.js',
                                'modules/advanced-tools/connector/controllers/connector-edit-rest.js',
                                'modules/advanced-tools/connector/services/connector-services.js',]
                    }]);
                }]
            }
           }
        }
    });
});