angular.module('vxl-mobile.authentication').controller('authenticationEditCtrl',function($rootScope, $state,$stateParams,$scope,$http,$ionicPopup,AuthenticationService) {

  $scope.authentication={};

  $scope.authid = $stateParams.authid;
 
    $scope.onload = function(){
      AuthenticationService.getByLdap($scope.authid).then(
        function (data) {
            // $scope.data = data;
            $scope.listArray = data;
            console.log($scope.listArray);
            $scope.loading='Done';

            $scope.authentication.name =  $scope.listArray.name;
            $scope.authentication.hostname =  $scope.listArray.hostname;
            $scope.authentication.port =  $scope.listArray.port;
            $scope.authentication.description =  $scope.listArray.description;
            $scope.authentication.authuser =  $scope.listArray.authorized_user;
            $scope.authentication.basedn =  $scope.listArray.password;
            $scope.authentication.useridattr =  $scope.listArray.userIdAttr;
            $scope.authentication.connectiontimeout =  $scope.listArray.connection_timeout;
            $scope.authentication.domain =  $scope.listArray.domain;

             //$scope.authentication.ssl_enabled = document.getElementById('switchchange').checked;
        });
    };
    $scope.onload();

	$scope.validate = function()
  {
    	 var alpha=/^[a-z A-Z]+$/;	var no=/^[0-9]+$/;
    	 if ($scope.authentication.name === " " || $scope.authentication.name === undefined) {
         	$scope.validateMain($scope.authentication.name,"Please Enter Authentication Name"); return false; }

    	  if (!($scope.authentication.name).match(alpha)) {
           $scope.validateMain($scope.authentication.name,"Please Enter Authentication Name in Alphabets"); return false; }

        if ($scope.authentication.hostname === " " || $scope.authentication.hostname === undefined) {
            $scope.validateMain($scope.authentication.hostname,"Please Enter Host Name "); return false; }

        if (!($scope.authentication.hostname).match(alpha)) {
            $scope.validateMain($scope.authentication.hostname,"Please Enter Host Name in Alphabets"); return false; }

        if ($scope.authentication.port === " " || $scope.authentication.port === undefined) {
            $scope.validateMain($scope.authentication.port,"Please Enter Port Number"); return false; }

        if (!($scope.authentication.port).match(no)) {
            $scope.validateMain($scope.authentication.port,"Please Enter Port Number in Digit"); return false; }

        if ($scope.authentication.authuser === " " || $scope.authentication.authuser === undefined) {
            $scope.validateMain($scope.authentication.authuser,"Please Enter Authorized User"); return false;  }

        if ($scope.authentication.basedn === " " || $scope.authentication.basedn === undefined) {
            $scope.validateMain($scope.authentication.basedn,"Please Enter Base Domain Name"); return false; }

        if ($scope.authentication.useridattr === " " || $scope.authentication.useridattr === undefined) {
            $scope.validateMain($scope.authentication.useridattr,"Please Enter User Attribute"); return false;  }

        if ($scope.authentication.connectiontimeout === " " || $scope.authentication.connectiontimeout === undefined) {
            $scope.validateMain($scope.authentication.connectiontimeout,"Please Enter Connection Timeout"); return false;    }

        if ($scope.authentication.domain === " " || $scope.authentication.domain === undefined) {
            $scope.validateMain($scope.authentication.domain,"Please Enter Domain"); return false;  }

         $scope.addAuthenticationData();
         //window.location.href ="/#/app/authentication";
    };

    $scope.addAuthenticationData = function () {
       AuthenticationService.updateLDAP($scope.authentication).then(
        function (data)
        {
          console.log("after add in post"+data);
          $state.go('app.authenticationList');
      });
   };



});