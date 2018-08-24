angular.module('vxl-mobile.template').controller('templateEditCtrl',function($stateParams,$scope,$http,$ionicPopup,TemplateService) {

	$scope.template = {};
  $scope.templateid = $stateParams.templateId;
  
  $scope.onload = function(){
      TemplateService.getByTemplate($scope.templateid).then(
        function (data) {
            $scope.ArrayList = data;
            console.log($scope.ArrayList);
            // $scope.template.name = $scope.data[0].payload.data[0].name;
            $scope.template.name = $scope.ArrayList.name;
            console.log( $scope.template.name);
        });
    };
    $scope.onload();


	$scope.validate = function()  {
  		var alpha=/^[a-z A-Z]+$/;
  		    	
    	 if ($scope.template.name === " " || $scope.template.name=== undefined) {
          $scope.validateMain($scope.template.name,"Please Enter Template Name"); return false;	 }

   		 if (!($scope.template.name).match(alpha)) {
         $scope.validateMain($scope.template.name,"Please Enter Template in Alphabets"); return false;  }
        
        $scope.updateGroupData();
        window.location.href ="/#/app/template";
      
    };

     $scope.updateGroupData = function () {
       TemplateService.updateTemplate($scope.template).then(
        function (data)
        {
          console.log("after update in post"+data);
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