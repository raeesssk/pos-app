angular.module('vxl-mobile.user').controller('userEditCtrl' ,function($http,$scope,$state,$stateParams,UsersService,$ionicPopup) {

  $scope.user = {};
   $scope.userid = $stateParams.id;
 
    $scope.onload = function(){
      UsersService.getByUsers($scope.userid).then(
        function (data) {
            // $scope.data = data;
            $scope.listArray = data;
            console.log($scope.listArray);
            $scope.loading='Done';

            $scope.user.firstname =  $scope.listArray.firstName;
            $scope.user.lastname =  $scope.listArray.lastName;
            $scope.user.email =  $scope.listArray.email;
            $scope.user.password =  $scope.listArray.password;
            $scope.user.confirmpassword =  $scope.listArray.password;
            $scope.user.enableUser = document.getElementById('switchchange').checked;
        });
    };
    $scope.onload();

  
   	$scope.validate = function()  {
  		var alpha=/^[a-z A-Z]+$/;
      var mailExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            
       if ($scope.user.firstname === " " || $scope.user.firstname === undefined) {
            $scope.validateMain($scope.user.firstname,"Please Enter First Name"); return false; }

       if (!($scope.user.firstname).match(alpha)) {
            $scope.validateMain($scope.user.firstname,"Please Enter First Name in Alphabets"); return false;  }

        if ($scope.user.lastname === " " || $scope.user.lastname === undefined) {
          $scope.validateMain($scope.user.lastname,"Please Enter Last Name"); return false; }

       if (!($scope.user.lastname).match(alpha)) {
           $scope.validateMain($scope.user.lastname,"Please Enter Last Name in Alphabets"); return false; }

        if ($scope.user.email  === " " || $scope.user.email  === undefined) {
          $scope.validateMain($scope.user.lastname,"Please Enter Email Name"); return false; }

       if (!($scope.user.email).match(mailExp)) {
           $scope.validateMain($scope.user.email,"Please Enter Email in Proper Formate"); return false; }

        if ( $scope.user.password != $scope.user.confirmpassword) {
           $ionicPopup.alert({ title: 'Error', content: 'Please Confirm Password Not Match' }); return false; }


            $scope.updateUserData();
            //window.location.href ="/#/app/users";
            // $scope.callAnotherCtr();
      
    };

     $scope.updateUserData = function () {
       UsersService.updateUser($scope.user,$scope.userid).then(
        function (data)
        {
          console.log("after update in post"+data);
          $state.go('app.userList');
      });
   };

  // $scope.callAnotherCtr = function()
  //  {
  //     var testCtrl1ViewModel = $scope.$new();
  //    $controller('userListCtrl',{$scope : testCtrl1ViewModel });
  //    window.location.href ="/#/app/users";
  //    testCtrl1ViewModel.load(); 
  // }; // $controller... is inject in controller...  call one controller method into another and pass userAdd js file in config


});