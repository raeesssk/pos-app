angular.module('vxl-mobile.group').controller('groupEditCtrl',function($stateParams,$q,$state,$scope,$http,$ionicPopup,GroupsService,UsersService,RoleService) {

     $scope.group={};
      $scope.listArraydata=[];
      $scope.listArray = [];
      $scope.dataArray = [];

       $scope.autoExpand = function(e) {
          var element = typeof e === 'object' ? e.target : document.getElementById(e);
          var scrollHeight = element.scrollHeight -80; // replace 60 by the sum of padding-top and padding-bottom
          element.style.height = scrollHeight +80+ "px";    
       };
  
      function expand() {
        $scope.autoExpand('TextArea');
      }


      $scope.groupid = $stateParams.groupId;

      $scope.onload = function()
      {
         GroupsService.getGroupById($scope.groupid).then(
          function (data)
          {
            $scope.listArray = data;
            $scope.group.editname = $scope.listArray.name; 
            $scope.group.editdescription = $scope.listArray.description; 
          });
      };
      $scope.onload();

      $scope.validate = function()  {
      var alpha=/^[a-z A-Z]+$/;
        
      if ($scope.group.editname === " " || $scope.group.editname=== undefined) {
         $scope.validateMain($scope.group.editname,"Please Enter Group Name"); return false;  }

      if (!($scope.group.editname).match(alpha)) {
         $scope.validateMain($scope.group.name,"Please Enter Group Name in Alphabets"); return false;   }
         
        $scope.updateGroupData();
        //window.location.href ="/#/app/group";
      
   };

    $scope.updateGroupData = function () {
       GroupsService.updateGroups($scope.group,$scope.groupid).then(
        function (data)
        {
          console.log("after update in post"+data);
          $state.go('app.groupList');
        });
    };

      

        $scope.onItemClone = function () {
           window.location.href="/#/app/clone-groups/"+$scope.groupid;
        };


      $scope.infodiv =  true;
      $scope.groupdiv = false;
      $scope.rolediv =  false;

      $scope.info = function(data)  {
       
         if(data == 'info')  {
            $('#roletab').removeClass('active');
            $('#grouptab').removeClass('active');
            $('#infotab').addClass('active');
          
            $scope.infodiv =  true;
            $scope.groupdiv = false;
            $scope.rolediv =  false;
             $scope.userload();
           }
      };
   
      $scope.group = function(data)  {
       
         if(data == 'group')  {

            $('#infotab').removeClass('active');
            $('#roletab').removeClass('active');
            $('#grouptab').addClass('active');
   
             $scope.groupdiv = true;
             $scope.infodiv =  false;
             $scope.rolediv =  false;
             $scope.userload();
           }
      };

      $scope.role = function(data)   {

        if(data == 'role')  {
             $('#infotab').removeClass('active');
             $('#grouptab').removeClass('active');
             $('#roletab').addClass('active');

              $scope.groupdiv = false;
              $scope.infodiv =  false;
              $scope.rolediv =  true;
              $scope.roleload();
           }
     };

       //$scope.usertypeheadsearch=[];
       $scope.userload = function () {
          UsersService.getUsers().then(
              function (data)
              {
                $scope.listArraydata = data;
                // $scope.items = $scope.listArraydata[0].payload.data;
                // console.log($scope.items);
              });
      };

     $scope.roleload = function () {
          RoleService.getRoles().then(
              function (data)
              {
                $scope.listArray = data;
             
              });
      };
        $scope.roleload();
        $scope.userload();

    //   $scope.items = [
    //     {display: 'Hello'},
    //     {display: 'Baha'},
    //     {display: 'Ala'},
    //     {display: 'Siwar'},
    //     {display: 'Monira'},
    //     {display: 'Samir'},
    //     {display: 'Spange Bob'},
    //     {display: 'Deneris Targariant'},
    //     {display: 'Ned Stark'}
    // ];

    // // console.log($scope.items);
    // $scope.onSelect = function (item) {
    //     console.log('item', item);
    // };
   

       // $scope.addUser = function(){
       //       $ionicPopup.show({
       //        // template: '<input type="text" ng-model="user" typeahead="airplane as airplane.firstName for airplane in listArraydata[0].payload.data | filter:$viewValue | limitTo:3">',
       //        template:' <input type="text" ionic-autocomplete="{items: items, onSelect: doSomthing}" placeholder="Search ?" ng-model="search">',
       //        title: 'Search User',
       //        subTitle: 'Add User to Group',
       //        scope: $scope,
       //        buttons: [
       //        { text: 'Cancel' },
       //        {
       //          text: '<b>Save</b>',
       //          type: 'button-positive',
       //          onTap: function(e) {
       //            if (!$scope.data.name) {
       //             e.preventDefault();
       //            } else {
       //              return $scope.data.name;
       //            }
       //          }
       //        }
       //      ]
       //    });
       // };

      // $scope.assignRole = function(){
      //       $ionicPopup.show({
      //         template: '<input type="text" ng-model="data.name">',
      //         title: 'Assign Role',
      //         subTitle: 'Assign Role to Group',
      //         scope: $scope,
      //         buttons: [
      //         { text: 'Cancel' },
      //         {
      //           text: '<b>Save</b>',
      //           type: 'button-positive',
      //           onTap: function(e) {
      //             if (!$scope.data.name) {
      //              e.preventDefault();
      //             } else {
      //               return $scope.data.name;
      //             }
      //           }
      //         }
      //       ]
      //     });
      //  };

      $scope.onItemDelete = function(item) {  
       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete'
        });

        confirmPopup.then(function(res) {
           if(res) {
              console.log('Sure!');
           } else {
              console.log('Not sure!');
           }
        }); 
    };

     $scope.onItemunassign = function(item) {  
       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Unassign'
        });

        confirmPopup.then(function(res) {
           if(res) {
              console.log('Sure!');
           } else {
              console.log('Not sure!');
           }
        }); 
    };
     
     
});