angular.module('vxl-mobile.email').controller('emailAddCtrl',function($rootScope,$state,$scope,$http,EmailService,$ionicPopup) {

    console.log("email add controller triggered");

    $scope.email = {};

	$scope.validate = function()  {
  		
  		var alpha=/^[a-z A-Z]+$/;
  		var no=/^[0-9]+$/;
  		var mailExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    	
      if ($scope.email.name === " " || $scope.email.name === undefined) {
          $scope.validateMain($scope.email.name,"Please Enter Name"); return false;   }

      if (!($scope.email.name).match(alpha)) {
          $scope.validateMain($scope.email.name,"Please Enter Name in Alphabets"); return false; }

    	 if ($scope.email.servername === " " || $scope.email.servername === undefined) {
          $scope.validateMain($scope.email.servername,"Please Enter Server Name"); return false;	 }
   		
   		 if (!($scope.email.servername).match(alpha)) {
          $scope.validateMain($scope.email.servername,"Please Enter Server Name in Alphabets"); return false;	}

    	 if ($scope.email.hostname === " " || $scope.email.hostname === undefined) {
         $scope.validateMain($scope.email.hostname,"Please Enter Host Name"); return false; }
   		
   		 if (!($scope.email.hostname).match(alpha)) {
        $scope.validateMain($scope.email.hostname,"Please Enter Host Name in Alphabets"); return false;  	}
       
        if ($scope.email.portno === " " || $scope.email.portno === undefined) {
          $scope.validateMain($scope.email.portno,"Please Enter Port Number"); return false;   }
        
        if (!($scope.email.portno).match(no)) {
           $scope.validateMain($scope.email.portno,"Please Enter Port Number in Digit"); return false;   }

	   	 if ($scope.email.email === " " || $scope.email.email === undefined) {
        $scope.validateMain($scope.email.email,"Please Enter Email Id"); return false;  }
      
        if (!($scope.email.email).match(mailExp)) {
          $scope.validateMain($scope.email.email,"Please Enter Email in Proper Formate"); return false;	 }
    	
    	if ($scope.email.sendername === " " || $scope.email.sendername === undefined) {
         $scope.validateMain($scope.email.sendername,"Please Enter Sender Name"); return false;   }

       	// if ($scope.email.password === " " || $scope.email.password === undefined) {
        //   $scope.validateMain($scope.email.password,"Please Enter Password"); return false;    }

         if ( $scope.email.password != $scope.email.cnfpassword) {
         $ionicPopup.alert({ title: 'Error', content: 'Confirm Password Not Match' }); return false; }

           $scope.addEmailData();
           //window.location.href ="/#/app/email";
   	};

    $scope.addEmailData = function () {
       EmailService.createEmailconfig($scope.email).then(
        function (data)
        {
          console.log("after add in post"+data);
          $state.go('app.emailList'); 
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