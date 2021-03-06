angular.module('vxl-mobile.group').controller('groupCloneCtrl',function($stateParams,$state,$rootScope,$scope,$http,GroupsService, $ionicPopup) {

    $scope.group = {};

    $scope.groupid = $stateParams.groupId;

	 $scope.validate = function()  {
  		var alpha=/^[a-z A-Z]+$/;
  	   	
    	if ($scope.group.name === " " || $scope.group.name=== undefined) {
         $scope.validateMain($scope.group.name,"Please Enter Group Name"); return false; 	}

   		if (!($scope.group.name).match(alpha)) {
         $scope.validateMain($scope.group.name,"Please Enter Group Name in Alphabets"); return false;   }
         
        $scope.addGroupData();
        //window.location.href ="/#/app/group";
      
   };

     $scope.addGroupData = function () {
        GroupsService.createGroups($scope.group).then(
          function (data)
          {
            console.log("after add in post"+data);
            $state.go('app.groupList');
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


    $scope.onload = function()
    {
       GroupsService.getGroupById($scope.groupid).then(
          function (data)
          {
            $scope.listArray = data;
            $scope.group.name = $scope.listArray.name; 
            $scope.group.description = $scope.listArray.description; 
          
         });
    };
    $scope.onload();



});