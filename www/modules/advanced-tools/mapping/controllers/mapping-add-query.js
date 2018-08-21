angular.module('vxl-mobile.mapping').controller('mappingAddQueryCtrl',function($scope) {

    $scope.mapping ={};

    $scope.validate = function()
    {
        window.location.href ="/#/app/mapping-add-mapping";
    };

    
    $scope.methodFunction = function (data) {
      $scope.getDiv=false;
      $scope.rowDiv=false;
      
      if(data === "get"){
         $scope.postParamDiv=false;
        $scope.formDiv=false;
        $scope.getDiv=true;  }

      if(data === "post"){
         $scope.postParamDiv=true; }
     };


    $scope.dataPost = function(data)
    {
      if(data === "row"){
        $scope.rowDiv=true;
        $scope.formDiv=false;
      }

      if(data === "form"){
         $scope.formDiv=true;
         $scope.rowDiv=false;
      }
    };

});