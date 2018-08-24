angular.module('vxl-mobile.setting').controller('settingEditCtrl',function($stateParams,$scope,$http,settingService) {

 	$scope.setting={};
    $scope.settingid = $stateParams.settingId;
   
    $scope.onload = function(){
      settingService.getSettingInfo($scope.settingid).then(
        function (data) {
            $scope.data = data;
            $scope.setting.companyname = $scope.data[0].payload.data[0].name;
            $scope.setting.information = $scope.data[0].payload.data[0].information;
            $scope.setting.language = $scope.data[0].payload.data[0].language;
            $scope.setting.timezone = $scope.data[0].payload.data[0].time_zone;
            $scope.setting.dateformate = $scope.data[0].payload.data[0].date_formate;
            $scope.setting.publickey = $scope.data[0].payload.data[0].public_key;
        });
    };
    $scope.onload();

       
});