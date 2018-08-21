angular.module('vxl-mobile.setting').controller('settingListCtrl',function($scope,settingService) {

  $scope.listArrayinfo=[];
  $scope.listArray =[];

  $scope.infodiv =true;
   $scope.domaindiv =false;

    $scope.info = function(data)  {
       
         if(data == 'info')  {
            $('#domaintab').removeClass('active');
            $('#infotab').addClass('active');
          
           $scope.infodiv =true;
   			$scope.domaindiv =false;
           
             $scope.infoload();
           }
      };

      $scope.domain = function(data)  {
       
         if(data == 'domain')  {
          
            $('#domaintab').addClass('active');
             $('#infotab').removeClass('active');
          
           $scope.infodiv =false;
   			$scope.domaindiv =true;
           
             $scope.domainload();
           }
      };

	$scope.infoload = function () {
		settingService.getSettingInfo().then(
		function (data)
		{
			$scope.listArrayinfo = data;
		});
	};

	$scope.domainload = function () {
		settingService.getSetting().then(
		function (data)
		{
			$scope.listArray = data;
		});
	};

	$scope.infoload();
	$scope.domainload();


		$scope.primarybackupswitch =function(obj, event, id,arrlist)
  		{
			 angular.forEach(arrlist, function (value, key) {
                  if(value.primary === true) {
                    value.primary =false; }
               });
            obj.primary =true;
     
  		};

});