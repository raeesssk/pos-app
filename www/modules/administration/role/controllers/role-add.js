angular.module('vxl-mobile.role').controller('roleAddCtrl',function($rootScope,$scope,$http,RoleService,$ionicPopup) {

   $scope.role = {};

	$scope.validate = function()  {
  		var alpha=/^[a-z A-Z]+$/;
  	   	
    	 if ($scope.role.name === " " || $scope.role.name=== undefined) {
          $scope.validateMain($scope.role.name,"Please Enter Role Name"); return false; 	}

   		 if (!($scope.role.name).match(alpha)) {
          $scope.validateMain($scope.role.name,"Please Enter Role Name in Alphabets"); return false; }

        $scope.addRoleData();
        window.location.href ="/#/app/role";
   };

    $scope.addRoleData = function () {
       RoleService.createRoles($scope.role).then(
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