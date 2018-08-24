angular.module('vxl-mobile.license-management').controller('licenseManagementCtrl',function($scope,$http,LicenseManagementService,$ionicPopup) {

 $scope.licenseManagementData=[];

  $scope.load = function () {
    LicenseManagementService.getLicenseManagement().then(
    function (data)
    {
      $scope.licenseManagementData = data[0];
      console.log($scope.licenseManagementData);
    });
  };

  $scope.load();

  //$scope.license = {};
  $scope.validate = function (data) {
    console.log(data);
    
    console.log($scope.licenseManagement);

      if ($scope.licenseManagement === "" || $scope.licenseManagement === undefined) {
            $scope.validateMain($scope.licenseManagement,"Please Enter License Key"); return true; }

  };


});