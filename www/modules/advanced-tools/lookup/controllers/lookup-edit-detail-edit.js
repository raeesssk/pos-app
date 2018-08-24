angular.module('vxl-mobile.lookup').controller('lookupEditDetailEditCtrl',function($scope,$stateParams,LookupService) {

    $scope.lookup ={};

     $scope.lookupname= $stateParams.name;
    $scope.onloadlookup = function(){
      LookupService.getLookup($scope.lookupname).then(
        function (data) {
            $scope.data = data;
            $scope.lookup.connector = $scope.data[0].payload.data[0].connector;
            $scope.lookup.source = $scope.data[0].payload.data[0].value;
        });
    };
    $scope.onloadlookup();

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