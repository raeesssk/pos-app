angular.module('vxl-mobile.user').controller('userAddCtrl',function($scope,$state,$window,$http,UsersService,$ionicPopup) {

 	$scope.user = {};
 
	$scope.validate = function()  {
 		  var alpha=/^[a-z A-Z]+$/;
  		var mailExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  		    	
    	 if ($scope.user.firstname === " " || $scope.user.firstname === undefined) {
     	      $scope.validateMain($scope.user.firstname,"Please Enter First Name"); return false; }

   		 if (!($scope.user.firstname).match(alpha)) {
       	 	  $scope.validateMain($scope.user.firstname,"Please Enter First Name in Alphabets"); return false;  }

       	if ($scope.user.lastname === " " || $scope.user.lastname === undefined) {
     	 	  $scope.validateMain($scope.user.lastname,"Please Enter Last Name"); return true; }

   		 if (!($scope.user.lastname).match(alpha)) {
       	   $scope.validateMain($scope.user.lastname,"Please Enter Last Name in Alphabets"); return false; }

        if ($scope.user.email  === " " || $scope.user.email  === undefined) {
          $scope.validateMain($scope.user.lastname,"Please Enter Email Name"); return false; }

       if (!($scope.user.email).match(mailExp)) {
           $scope.validateMain($scope.user.email,"Please Enter Email in Proper Formate"); return false; }

       	if ( $scope.user.password != $scope.user.confirmpassword) {
       		 $ionicPopup.alert({ title: 'Error', content: 'Please Confirm Password Not Match' }); return false; }

         $scope.addUserData();
         //window.location.href ="/#/app/users";
        // $state.transitionTo('app.userList');
         //$state.go('app.userList'); 
         // $window.location.href ="/#/app/users";
      
    };

     $scope.addUserData = function () {
       UsersService.createUsers($scope.user).then(
        function (data)
        {
          console.log("after add in post"+data);
          $state.go('app.userList');        
          //$rootScope.$emit('childEmit', 'Child calling parent');
          
      });
   };



});