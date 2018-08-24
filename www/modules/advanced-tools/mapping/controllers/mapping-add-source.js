angular.module('vxl-mobile.mapping').controller('mappingAddSourceCtrl',function($scope,MappingFeedService) {

    $scope.mapping ={};
     $scope.validate = function()
    {
        window.location.href ="/#/app/mapping-add-query";
    };

        $scope.listFeedArray=[];

     $scope.onload = function () {
          MappingFeedService.getMappingFeed().then(
              function (data)
              {
                $scope.listFeedArray = data;
                console.log("mapping feed data"+$scope.listFeedArray);
              
              });
      };
      $scope.onload();

});