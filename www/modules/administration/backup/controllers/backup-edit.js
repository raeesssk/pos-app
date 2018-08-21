angular.module('vxl-mobile.backup').controller('backupEditCtrl',function($stateParams,$scope,$http,$ionicPopup,BackupService) {

  $scope.backup = {};
  $scope.backupid = $stateParams.backupId;

  $scope.onload = function(){
      BackupService.getBackup($scope.backupid).then(
        function (data) {
            $scope.data = data;
            $scope.backup.name = $scope.data[0].payload.data[0].name;
            $scope.backup.description = $scope.data[0].payload.data[0].description;
            $scope.backup.noofdays=2;
        });
  };

  $scope.onload();


	$scope.validate = function()  {
  		
  		var alpha=/^[a-z A-Z]+$/;
  		var no=/^[0-9]+$/;
    	
    	 if ($scope.backup.name === " " || $scope.backup.name=== undefined) {
          $scope.validateMain($scope.backup.name,"Please Enter Backup Name"); return false; 	}
   		
   		 if (!($scope.backup.name).match(alpha)) {
          $scope.validateMain($scope.backup.name,"Please Enter Backup Name in Alphabets"); return false; 	 	}

        if ($scope.backup.noofdays === " " || $scope.backup.noofdays === undefined) {
           $scope.validateMain($scope.backup.noofdays,"Please Enter No of Days"); return false;  }
      
        if (!($scope.backup.noofdays).match(no)) {
            $scope.validateMain($scope.backup.noofdays,"Please Enter No of Days in Digit"); return false;  }

           $scope.updateBackupData();
          window.location.href ="/#/app/backup";
 	  };

    $scope.updateBackupData = function () {
       BackupService.updateBackup($scope.backup).then(
        function (data)
        {
          console.log("after update in post"+data);
      });
   };



});