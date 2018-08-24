angular.module('vxl-mobile.lookup').controller('lookupEditValueCtrl',function($scope,LookupService) {

	$scope.lookup ={};

	$scope.validate = function()
    {
    	if ($scope.lookup.connector === " " || $scope.lookup.connector === undefined) {
          $scope.validateMain($scope.lookup.connector,"Please Enter Connector"); return false; }

      	if ($scope.lookup.source === " " || $scope.lookup.source === undefined) {
      	  $scope.validateMain($scope.lookup.source,"Please Enter Source"); return false; }

      	if ($scope.lookup.target === " " || $scope.lookup.target === undefined) {
      	  $scope.validateMain($scope.lookup.target,"Please Enter Target"); return false; }

       window.location.href ="/#/app/lookup-edit-detail";
  };

  

});