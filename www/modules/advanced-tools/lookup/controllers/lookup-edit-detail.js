angular.module('vxl-mobile.lookup').controller('lookupEditDetailCtrl',function($scope,LookupService) {

        $scope.lookup ={};

      $scope.onload = function () {
        LookupService.getLookup().then(
         function (data)
         {
           $scope.listArray = data;
           console.log("lookup data"+$scope.listArray);
         });
      };
      $scope.onload();

 });