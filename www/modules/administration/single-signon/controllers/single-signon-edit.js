angular.module('vxl-mobile.single-signon').controller('singlesignonEditCtrl',function($stateParams,$state,$scope,$http,$ionicPopup,SinglesignonService) {

	$scope.signon ={};

  $scope.singlesignonId = $stateParams.id;
  $scope.onload = function(){
      SinglesignonService.getBySignOn($scope.singlesignonId).then(
        function (data) {
            $scope.data = data;
            $scope.signon.name = $scope.data.name;
            $scope.signon.description = $scope.data.description;
            $scope.signon.singinurl = $scope.data.signinUrl;
            $scope.signon.singouturl = $scope.data.signoutUrl;
            $scope.signon.changepassword= $scope.data.changepasswordUrl;
        });
  };

  $scope.onload();

	$scope.validate = function()  {
      var alpha=/^[a-z A-Z]+$/;
  		var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

      if ($scope.signon.name === " " || $scope.signon.name === undefined) {
          $scope.validateMain($scope.signon.name,"Please Enter Name"); return false;   }

      if (!($scope.signon.name).match(alpha)) {
          $scope.validateMain($scope.signon.name,"Please Enter Name in Alphabets"); return false; }
    	
    	 if ($scope.signon.singinurl === " " || $scope.signon.singinurl=== undefined) {
          $scope.validateMain($scope.signon.singinurl ,"Please Enter Sign In Page URL Name"); return false;	 }

   		 if (!($scope.signon.singinurl).match(urlExp)) {
          $scope.validateMain($scope.signon.singinurl ,"Please Enter Sign In Page URL in Proper Formate"); return false;	 	}
      
      	 if ($scope.signon.singouturl === " " || $scope.signon.singouturl=== undefined) {
          $scope.validateMain($scope.signon.singouturl ,"Please Enter Sign Out Page URL Name"); return false;  }

   		 if (!($scope.signon.singouturl).match(urlExp)) {
          $scope.validateMain($scope.signon.singouturl ,"Please Enter Sign Out Page URL in Proper Formate"); return false;  }

      	 if ($scope.signon.changepassword === " " || $scope.signon.changepassword=== undefined) {
           $scope.validateMain($scope.signon.changepassword ,"Please Enter Change Password"); return false; 	 }

          $scope.updateSingleSignData ();
          //window.location.href ="/#/app/singlesignon";
   };

   $scope.updateSingleSignData = function () {
       SinglesignonService.updateSingleSign($scope.signon, $scope.singlesignonId).then(
        function (data)
        {
          console.log("after update in post"+data);
          $state.go('app.singlesignonList');
      });
   };

     $scope.onItemDelete = function() {  
        var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });

        confirmPopup.then(function(res) {
           if(res) {
              console.log('Sure!');
              SinglesignonService.deleteSingleSign($scope.singlesignonId).then(
                function (data)
                {
                  console.log("after add in post"+data);
                  $state.go('app.singlesignonList');
                   //window.location.href ="/#/app/singlesignon";
                   //location.reload();
                   //$scope.load();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };



});