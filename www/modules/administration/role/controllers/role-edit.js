angular.module('vxl-mobile.role').controller('roleEditCtrl',function($stateParams,$scope,$http,$ionicPopup,RoleService,GroupsService) {

     $scope.role = {};

    $scope.roleid = $stateParams.id;

    $scope.onload = function(){
        RoleService.getByRoles($scope.roleid).then(
          function (data) {
              $scope.data = data;
              $scope.role.name = $scope.data.name;
              $scope.role.description = $scope.data.description;
          });
      };
    $scope.onload();

      $scope.autoExpand = function(e) {
          var element = typeof e === 'object' ? e.target : document.getElementById(e);
        var scrollHeight = element.scrollHeight -80; // replace 60 by the sum of padding-top and padding-bottom
        element.style.height = scrollHeight +80+ "px";    
      };
    
      function expand() {
        $scope.autoExpand('TextArea');
      }

 	 $scope.validate = function()  {
    		var alpha=/^[a-z A-Z]+$/;
  	   	
    	 if ($scope.role.name === " " || $scope.role.name=== undefined) {
          $scope.validateMain($scope.role.name,"Please Enter Role Name"); return false; 	}

   		 if (!($scope.role.name).match(alpha)) {
          $scope.validateMain($scope.role.name,"Please Enter Role Name in Alphabets"); return false; }

         $scope.updateRoleData();
         window.location.href ="/#/app/role";
      
   };

    $scope.updateRoleData = function () {
       RoleService.updateRole($scope.role,$scope.roleid).then(
        function (data)
        {
          console.log("after update in post"+data);
      });
   };

      $scope.infodiv =  true;
      $scope.groupdiv = false;
      $scope.permitiondiv =  false;

      $scope.info = function(data)  {
       
         if(data == 'info')  {
            $('#permitiontab').removeClass('active');
            $('#grouptab').removeClass('active');
            $('#infotab').addClass('active');
          
            $scope.infodiv =  true;
            $scope.groupdiv = false;
            $scope.permitiondiv =  false;
             $scope.groupload();
           }
      };
   
      $scope.group = function(data)  {
       
         if(data == 'group')  {

            $('#infotab').removeClass('active');
            $('#permitiontab').removeClass('active');
            $('#grouptab').addClass('active');
   
             $scope.groupdiv = true;
             $scope.infodiv =  false;
             $scope.permitiondiv =  false;
             $scope.groupload();
           }
      };

      $scope.permition = function(data)   {

        if(data == 'permition')  {
             $('#infotab').removeClass('active');
             $('#grouptab').removeClass('active');
             $('#permitiontab').addClass('active');

              $scope.groupdiv = false;
              $scope.infodiv =  false;
              $scope.permitiondiv =  true;
              $scope.roleload();
           }
     };

      $scope.groupload = function () {
          GroupsService.getGroups().then(
              function (data)
              {
                $scope.listArraydata = data;
              });
      };

       $scope.roleload = function () {
          RoleService.getRoles().then(
              function (data)
              {
                $scope.listArray = data;
                console.log("role data"+$scope.listArraydata);
              
              });
      };
        $scope.roleload();
       $scope.groupload();


        $scope.toggleGroup = function(group) {
          if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
          } else {
            $scope.shownGroup = group;
          }
        };
        $scope.isGroupShown = function(group) {
          return $scope.shownGroup === group;
        };





});