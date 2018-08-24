angular.module('vxl-mobile.template').controller('templateAddCtrl',function($rootScope,$scope,$http,$ionicPopup,TemplateService) {

	$scope.template = {};

	$scope.validate = function()  {
     var alpha=/^[a-z A-Z]+$/;
   	 if ($scope.template.name === " " || $scope.template.name=== undefined) {
          $scope.validateMain($scope.template.name,"Please Enter Template Name"); return false;	 }

   		 if (!($scope.template.name).match(alpha)) {
         $scope.validateMain($scope.template.name,"Please Enter Template in Alphabets"); return false;  }

         $scope.addTemplateData();
         window.location.href ="/#/app/template";
    };

    $scope.addTemplateData = function () {
       TemplateService.createTemplate($scope.template).then(
        function (data)
        {
          console.log("after add in post"+data);
      });
   };

     $scope.autoExpand = function(e) {
          var element = typeof e === 'object' ? e.target : document.getElementById(e);
        var scrollHeight = element.scrollHeight -80; // replace 60 by the sum of padding-top and padding-bottom
        element.style.height = scrollHeight +80+ "px";    
    };
  
    function expand() {
      $scope.autoExpand('TextArea');
    }

});