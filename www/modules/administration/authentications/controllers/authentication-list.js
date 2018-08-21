angular.module('vxl-mobile.authentication').controller('autheticationListCtrl',function($rootScope,$scope,$http,AuthenticationService,$ionicPopup) {

   $scope.listArray=[];

     $scope.onload = function () {
          AuthenticationService.getLDAP().then(
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
	  //       });  // $scope.listArray.splice($scope.listArray.indexOf(item), 1);
  	// };

  	 // if ( $scope.checkbox = { checked: false }) {
  	 // 	console.log("in if");
    //      $scope.disabled = true
    // } else {
    // 	console.log("in else");
    //      $scope.disabled = false
    // }

  
    
      

});