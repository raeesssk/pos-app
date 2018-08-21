angular.module('vxl-mobile.mapping').controller('mappingAddCtrl',function($scope) {

    $scope.mapping ={};

    $scope.autoExpand = function(e) {
          var element = typeof e === 'object' ? e.target : document.getElementById(e);
        var scrollHeight = element.scrollHeight -80; // replace 60 by the sum of padding-top and padding-bottom
        element.style.height = scrollHeight +80+ "px";    
    };
  
    function expand() {
      $scope.autoExpand('TextArea');
    }

    $scope.validate = function()
    {
      $scope.alpha=/^[a-z A-Z]+$/;
      $scope.no=/^[0-9]+$/;
      
       if ($scope.mapping.name === " " || $scope.mapping.name === undefined) {
          $scope.validateMain($scope.mapping.name,"Please Enter mapping Name"); return false; }

       if (!($scope.mapping.name).match($scope.alpha)) {
            $scope.validateMain($scope.mapping.name,"Please Enter mapping Name in Alphabets"); return false;  }

        window.location.href ="/#/app/mapping-add-source";

   };

});