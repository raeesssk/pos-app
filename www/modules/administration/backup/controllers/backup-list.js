angular.module('vxl-mobile.backup').controller('backupListCtrl',function($rootScope,$scope,$http,BackupService,$ionicPopup) {

   $scope.listArray=[];

    $scope.onload = function () {
      BackupService.getBackup().then(
          function (data)
          {
            $scope.listArray = data;
         
          });
    };
   $scope.onload();

   $scope.onItemDelete = function(item) {  
	       var confirmPopup = $ionicPopup.confirm({
	           title: 'Delete',
	           template: 'Are you sure Want to Delete the record?'
	        });

	        confirmPopup.then(function(res) {
	           if(res) {
	              console.log('Sure!');
	           } else {
	           	// $scope.show-delete =="false";
	              console.log('Not sure!');
	           }
	        });  // $scope.listArray.splice($scope.listArray.indexOf(item), 1);
  	};

  		$scope.primarybackupswitch =function(obj, event, id,arrlist)
  		{
			 angular.forEach(arrlist, function (value, key) {
                  if(value.primary === true) {
                    value.primary =false; }
               });
            obj.primary =true;
     
  		};

});