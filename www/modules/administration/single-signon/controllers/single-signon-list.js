angular.module('vxl-mobile.single-signon').controller('singlesignonListCtrl',function($rootScope,$scope,$http,SinglesignonService,$ionicPopup) {

     $scope.listArray=[];

     $scope.onload = function () {
          SinglesignonService.getSignOn().then(
              function (data)
              {
                $scope.listArray = data;
                console.log($scope.listArray);
                $scope.loading='Done';
             
              });
      };
      $scope.onload();

   //   $scope.onItemDelete = function(item) {  
   //     var confirmPopup = $ionicPopup.confirm({
   //         title: 'Delete',
   //         template: 'Are you sure Want to Delete the record?'
   //      });

   //      confirmPopup.then(function(res) {
   //         if(res) {
   //            console.log('Sure!');
   //         } else {
   //            console.log('Not sure!');
   //         }
   //      });	// $scope.listArray.splice($scope.listArray.indexOf(item), 1);
  	// };


});