angular.module('vxl-mobile.alert').controller('alertAddCtrl',function($rootScope,$q,$scope,$state,$http,alertService,$ionicPopup) {

    console.log("alert add controller triggered");

    $scope.alert = {};

    $scope.validate = function()
    {
  		$scope.alpha=/^[a-z A-Z]+$/;
  		$scope.no=/^[0-9]+$/;
    	
    	 if ($scope.alert.name === " " || $scope.alert.name === undefined) {
          $scope.validateMain($scope.alert.name,"Please Enter Alert Name"); return false; }

    	 if (!($scope.alert.name).match($scope.alpha)) {
            $scope.validateMain($scope.alert.name,"Please Enter Alert Name in Alphabets"); return false;  }

          $scope.addAlertData();
          //window.location.href ="/#/app/alert";
   };

    $scope.addAlertData = function () {
       alertService.createAlert($scope.alert).then(
        function (data)
        {
          console.log("after add in post"+data);
          $state.go('app.alertList'); 
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

    /* Auto Suggest TypeAhead For Lookup */
    $scope.SearchDatasources = function (dsName) {
        var deferred = $q.defer();
        $scope.datasources = [];
        
        alertService.getSubjectArea().then(function (results) {
              if (results.length > 0) {
                    angular.forEach(results, function (value, key) {
                        $scope.datasources.push({"subjectArea": value.name, "subjectAreaId": value.id});
                    });
                }
                else {
                    $scope.appName = "";
                    $rootScope.callError('Please enter valid app name');
                }
                deferred.resolve($scope.datasources);
            },
            function (error) {
                deferred.reject($scope.datasources);
            });

        return deferred.promise;
    };

    $scope.SearchDatasources();



});