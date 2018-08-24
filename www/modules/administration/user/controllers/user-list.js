angular.module('vxl-mobile.user').controller('userListCtrl',function($scope,$state, $rootScope,UsersService,$ionicPopup) {

	$scope.listArray=[];
  $scope.user ={};

	$scope.onload = function () {
 		UsersService.getUsers().then(
		function (data)
		{
      $scope.loading='Done';
			$scope.listArray = data;
      $scope.$apply();

 		})
	};
	$scope.onload();



 // $scope.moredata = false;
 //    $scope.loadMoreData=function()
 //    {
 //        $scope.items.push({id: $scope.items.length});
 //        if($scope.items.length==100)
 //        {
 //            $scope.moredata=true;
 //        }
 //      $scope.$broadcast('scroll.infiniteScrollComplete');
 //    };

 //    $scope.items=[];
  


	$scope.onItemDelete = function(id) {  
        var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });

        confirmPopup.then(function(res) {
           if(res) {
              UsersService.deleteUser(id).then(
                function (data)
                {
                  console.log("after add in post"+data);

                   //location.reload();
                   $scope.onload();
                   //$state.go('app.userList');

                });

           } else {
              console.log('Not sure!');
           }
        });	
  	};


      $scope.onItemSuspend = function(data) {  
        var confirmPopup = $ionicPopup.confirm({
           title: 'Suspend',
           template: 'Are You Sure Want to Suspend ?'
        });

        confirmPopup.then(function(res) {
           if(res) {
              $scope.user.firstname =  data.firstName;
              $scope.user.lastname =  data.lastName;
              $scope.user.email =  data.email;
              $scope.user.password =  data.password;
              $scope.user.confirmpassword =  data.password;
              $scope.user.enableuser =false;
              //$scope.user.enableUser = $scope.listArray.active;
              console.log($scope.user);
              UsersService.updateUser($scope.user,data.id).then(
                function (data)
                {
                  console.log("after update in post"+data);
                   //location.reload();
                   $scope.onload();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };


    $scope.resetpassword = function()
    {
      console.log("in reset pass");
      window.location="/#/app/reset-users";
    };


      // $rootScope.$on('childEmit', function(event, data) {
      //     console.log(data + ' Inside Sibling one');
      //     $scope.onload();
      //   });

});