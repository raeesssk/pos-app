angular.module('vxl-mobile.mapping').controller('mappingListCtrl',function($scope,$http,MappingService,$ionicPopup) {

     $scope.listArray=[];

     $scope.onload = function () {
        MappingService.getMapping().then(
        function (data)
        {
          $scope.listArray = data;
          console.log("mapping data"+$scope.listArray);
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