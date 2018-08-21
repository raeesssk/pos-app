angular.module('vxl-mobile.group').controller('groupEditRoleSearchCtrl',function($scope,FlightDataService,RoleService) {

 console.log("in search load");

	 $scope.arr=[];

	 $scope.onload = function() {
 		RoleService.getRoles().then(
          function (data)
          {
            $scope.arr = data[0].payload.data;
            console.log($scope.arr);
          });
	 };
	 $scope.onload();


   $scope.selecteddata = function(id)
   {
     console.log("id is"+id);

   };
	 

	$scope.data = { "airlines" : [], "search" : '' };

    $scope.search = function() {

    	FlightDataService.searchAirlines($scope.data.search,$scope.arr).then(
    		function(matches) {
    			$scope.data.airlines = matches;
    			console.log($scope.data.airlines);
    		}
    	)
    }

});