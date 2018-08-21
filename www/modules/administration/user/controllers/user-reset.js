angular.module('vxl-mobile.user').controller('userresetCtrl',function($scope,$http,UsersService,$ionicPopup) {

 	$scope.user = {};
 
	$scope.validate = function()  {
 		  var alpha=/^[a-z A-Z]+$/;
  		
       	if ( $scope.user.password != $scope.user.confirmpassword) {
       		 $ionicPopup.alert({ title: 'Error', content: 'Please Confirm Password Not Match' }); return false; }

         $scope.addUserData();
         window.location.href ="/#/app/users";
      
    };

   //   $scope.addUserData = function () {
   //     UsersService.createUsers($scope.user).then(
   //      function (data)
   //      {
   //        console.log("after add in post"+data);
          
   //    });
   // };

});