angular.module('vxl-mobile.group').controller('groupEditUserSearchCtrl',function($scope,FlightDataService,GroupsService) {

	 $scope.arr=[];

	 $scope.onload = function() {
 		GroupsService.getGroups().then(
          function (data)
          {
              $scope.arr = data[0].payload.data;
              angular.forEach(data[0].payload.data,function(data,key){
                 
                  $scope.arr.push(data.name);
            });
          });
	 };
	 $scope.onload();
	 

	// $scope.data = { "airlines" : [], "search" : '' };

 //    $scope.search = function() {

 //    	FlightDataService.searchAirlines($scope.data.search,$scope.arr).then(
 //    		function(matches) {
 //    			$scope.data.airlines = matches;
 //    			console.log($scope.data.airlines);
 //    		}
 //    	)
 //    }


 //    $scope.searchuser = function(name)
 //    {
 //      $scope.data.search =name;
 //      // $scope.id =id;
 //      console.log("id is"+name);

 //    };

    $scope.submituser = function()
    {
       GroupsService.createGroups($scope.data.search).then(
        function (data) {
            console.log("After Post" + data);
        });
    }


      $scope.model = "";
      $scope.clickedValueModel = "";
      $scope.removedValueModel = "";

      $scope.getTestItems = function (query) {
          if (query) {
              return {
                  items: $scope.arr
              };
          }
          console.log({items: []});
          return {items: []};
      };

      $scope.itemsClicked = function (callback) {
        console.log("item  click"+callback);
          $scope.clickedValueModel = callback;
      };
      $scope.itemsRemoved = function (callback) {
        console.log("item remove click"+callback);
          $scope.removedValueModel = callback;
      };


});