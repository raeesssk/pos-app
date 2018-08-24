angular.module('vxl-mobile.backup').controller('backupAddCtrl',function($rootScope,$scope,$http,$ionicPopup,BackupService) {

	$scope.backup = {};

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

          $scope.addBackupData();
          window.location.href ="/#/app/backup";
 	  };

    $scope.addBackupData = function () {
       BackupService.createBackup($scope.backup).then(
        function (data)
        {
          console.log("after add in post"+data);
      });
   };


});