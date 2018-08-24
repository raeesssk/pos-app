angular.module('vxl-mobile.alert').controller('alertEditCtrl',function($stateParams,$scope,$http,$ionicPopup,alertService) {

    $scope.alert = {};
  
    $scope.alertid = $stateParams.alertId;

    $scope.onload = function(){
      alertService.getByAlert($scope.alertid).then(
        function (data) {
            $scope.data = data;
            $scope.alert.name = $scope.data.name;
        });
    };
    $scope.onload();


    $scope.validate = function()  {
  		$scope.alpha=/^[a-z A-Z]+$/;
  	
    	 if ($scope.alert.name === " " || $scope.alert.name === undefined) {
          $scope.validateMain($scope.alert.name,"Please Enter Alert Name"); return false; }

    	 if (!($scope.alert.name).match($scope.alpha)) {
            $scope.validateMain($scope.alert.name,"Please Enter Alert Name in Alphabets"); return false;  }

        $scope.updateAlertData();
        window.location.href ="/#/app/alert";
    
    };

     $scope.updateAlertData = function () {
       alertService.updateAlert($scope.alert).then(
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