angular.module('vxl-mobile.lookup').controller('lookupAddCtrl',function($scope) {

    $scope.lookup ={};

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
      
       if ($scope.lookup.name === " " || $scope.lookup.name === undefined) {
          $scope.validateMain($scope.lookup.name,"Please Enter lookup Name"); return false; }

       if (!($scope.lookup.name).match($scope.alpha)) {
            $scope.validateMain($scope.lookup.name,"Please Enter lookup Name in Alphabets"); return false;  }

       if ($scope.lookup.subjectarea === " " || $scope.lookup.subjectarea === undefined) {
          $scope.validateMain($scope.lookup.subjectarea,"Please Enter Subject Area"); return false; }

       if ($scope.lookup.attribute === " " || $scope.lookup.attribute === undefined) {
          $scope.validateMain($scope.lookup.attribute,"Please Enter Attribute"); return false; }

        window.location.href ="/#/app/lookup-edit-detail";

   };

});