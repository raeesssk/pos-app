angular.module('vxl-mobile.lookup').controller('lookupListCtrl',function($rootScope,$scope,$http,LookupService,$ionicPopup) {

    console.log("lookup list controller triggered");

    $scope.listArray=[];

     $scope.onload = function () {
          LookupService.getLookup().then(
              function (data)
              {
                $scope.listArray = data;
                console.log("lookup data"+$scope.listArray);
              
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