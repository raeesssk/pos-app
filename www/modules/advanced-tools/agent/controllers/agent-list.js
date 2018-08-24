angular.module('vxl-mobile.agent').controller('agentListCtrl',function($rootScope,$scope,$http,agentService,$ionicPopup) {

     $scope.listArray=[];

      $scope.onload = function () {
        agentService.getAgent().then(
        function (data)
        {
          $scope.loading='Done';
          $scope.listArray = data;
          $scope.$apply();

        })
      };
      $scope.onload();


      $scope.moredata = false;
      $scope.loadMoreData=function()
      {
          var page=0;
          $scope.items.push({id:  $scope.items.length });
          console.log($scope.items.length);
          if($scope.items.length == 10)
          {
             var size=(page+1);
              $scope.moredata=true;
              $scope.onload();
         }
        $scope.$broadcast('scroll.infiniteScrollComplete');
      };
 
      $scope.items=[];

  
      $scope.onItemDelete = function(id) {  
       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });
        confirmPopup.then(function(res) {
           if(res) {
              console.log('Sure!');
               agentService.deleteAgent(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                   //location.reload();
                   $scope.onload();
                });
           } else {
              console.log('Not sure!');
           }
        }); 
    };


});