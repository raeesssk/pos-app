angular.module('vxl-mobile.alert').controller('alertListCtrl',function($rootScope,$scope,$http,alertService,$ionicPopup) {
   
    $scope.listArray=[];

    $scope.onload = function () {
      alertService.getAlert().then(
          function (data)
          {
            $scope.listArray = data;
            console.log($scope.listArray);
          });
      };
      $scope.onload();

   //     $scope.onItemDelete = function(item) {  
	  //      var confirmPopup = $ionicPopup.confirm({
	  //          title: 'Delete',
	  //          template: 'Are you sure Want to Delete the record?'
	  //       });

	  //       confirmPopup.then(function(res) {
	  //          if(res) {
	  //             console.log('Sure!');
	  //          } else {
	  //             console.log('Not sure!');
	  //          }
	  //       });  
  	// };

});