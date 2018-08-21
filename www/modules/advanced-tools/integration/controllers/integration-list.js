angular.module('vxl-mobile.integration').controller('integrationListCtrl',function($rootScope,$scope,$http,IntegrationService,$ionicPopup) {

     $scope.listArray=[];

     $scope.onload = function () {
        IntegrationService.getIntegration().then(
        function (data)
        {
          $scope.listArray = data;
          console.log("integration data"+$scope.listArray);
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
              console.log('Not sure!');
           }
        }); 
    };

});