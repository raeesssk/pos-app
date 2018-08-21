angular.module('vxl-mobile.single-signon').controller('singlesignonAddCtrl',function($rootScope,$scope,$http,$ionicPopup,SinglesignonService) {

	$scope.signon ={};

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

           $scope.addSingleSignData();
           window.location.href ="/#/app/singlesignon";
   };

   $scope.addSingleSignData = function () {
       SinglesignonService.createSingleSign($scope.signon).then(
        function (data)
        {
          console.log("after add in post"+data);
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