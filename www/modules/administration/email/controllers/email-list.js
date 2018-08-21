angular.module('vxl-mobile.email').controller('emailListCtrl',function($rootScope,$state,$scope,$http,EmailService,$ionicPopup) {

    $scope.listArray=[];
    $scope.startIndex=0;
    //$scope.arraylen =[];
   
  
    $scope.onload = function (index) {
      EmailService.getEmails(index).then(
          function (data)
          {
             $scope.listArray = data;
             $scope.loading='Done';
             $scope.$apply();
          
          });
      };
	  $scope.onload($scope.startIndex);


    $scope.moredata = false;
    $scope.loadMoreData=function(page)
    {
      //console.log("in load more ="+(page)+" len = "+ $scope.arraylen);
        $scope.items.push({id:  $scope.items.length });
        if($scope.items.length == 2)
        {
           var size=(page+1);
                
            $scope.moredata=true;
            $scope.onload(size);
       }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
  
    $scope.items=[];
     

   //  $scope.onItemDelete = function(item) {  
   //     var confirmPopup = $ionicPopup.confirm({
   //         title: 'Delete',
   //         template: 'Are you sure Want to Delete the record?'
   //      });

   //      confirmPopup.then(function(res) {
   //         if(res) {
   //            console.log('Sure!');
   //            $state.go('app.emailList');
   //         } else {
   //            console.log('Not sure!');
   //         }
   //      }); // $scope.listArray.splice($scope.listArray.indexOf(item), 1);
  	// };


});