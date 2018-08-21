// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('vxl-mobile', ['ionic', 
'ngRoute',
'vxl-mobile.menu',
'vxl-mobile.dinein',
'vxl-mobile.order',
'vxl-mobile.kitchen',
'vxl-mobile.user',
'vxl-mobile.group',
'vxl-mobile.role',
'vxl-mobile.alert',
'vxl-mobile.email',
'vxl-mobile.template',
'vxl-mobile.backup',
'vxl-mobile.authentication',
'vxl-mobile.single-signon',
'vxl-mobile.lookup',
'vxl-mobile.integration',
'vxl-mobile.connector',
'vxl-mobile.mapping',
'vxl-mobile.agent',
'vxl-mobile.setting',
'vxl-mobile.license-management',
'ionic-datepicker',
'ion-autocomplete',
 // 'ui.bootstrap'
// 'autocomplete.directive'

])

.run(function($ionicPlatform) {
  $ionicPlatform.on('resume', function() {
    $rootScope.$broadcast('onResume');
    //Refresh Scope and Views
  });

  $ionicPlatform.on('pause', function() {
  $rootScope.$broadcast('onPause');
  });
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
  $ionicConfigProvider.backButton.previousTitleText(false).text("");
  
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'components/partials/menu.html'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dinein');

});
