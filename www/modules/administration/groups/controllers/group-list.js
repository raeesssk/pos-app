angular.module('vxl-mobile.group').controller('groupListCtrl',function($scope,GroupsService,$ionicPopup) {

    $scope.listArray=[];

     $scope.onload = function () {
          GroupsService.getGroups().then(
              function (data)
              {
                $scope.listArray = data;
                console.log($scope.listArray);
                $scope.loading='Done';
             });
      };
       $scope.onload();
     
       $scope.onItemDelete = function(id) {  
	       var confirmPopup = $ionicPopup.confirm({
	           title: 'Delete',
	           template: 'Are you sure Want to Delete the record?'
	        });

	        confirmPopup.then(function(res) {
	           if(res) {
	              console.log('Sure!');
                GroupsService.groupDelete(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                   //location.reload();
                   $scope.onload();
                });
	           } else {
	              console.log('Not sure!');
	           }
	        }); 
  	};

  	 $scope.onItemClone = function (id) {
      window.location.href="/#/app/clone-groups/"+id;
       
      };


});