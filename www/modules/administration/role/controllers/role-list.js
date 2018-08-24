angular.module('vxl-mobile.role').controller('roleListCtrl',function($rootScope,$scope,$http,RoleService,$ionicPopup) {

      $scope.listArray=[];

     $scope.onload = function () {
          RoleService.getRoles().then(
              function (data)
              {
                $scope.listArray = data;
                $scope.loading='Done';
            
              });
      };
  	  $scope.onload();

	$scope.onItemDelete = function(id) {  
       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });

        confirmPopup.then(function(res) {
           if(res) {
              console.log('Sure!');
              RoleService.deleteRole(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                   //location.reload();
                   $scope.onload();
                });
           } else {
              console.log('Not sure!');
           }
        });	// $scope.listArray.splice($scope.listArray.indexOf(item), 1);
  	};


});