angular.module('vxl-mobile.email').controller('emailEditCtrl',function($stateParams,$state,$scope,$http,$ionicPopup,EmailService,GetService) {

    console.log("email edit controller triggered");
   $scope.email = {};

  $scope.emailid = $stateParams.id;

  console.log("id is"+$scope.emailid);
  
  $scope.onload = function(){
    EmailService.getByEmail($scope.emailid).then(
      function (data) {

          $scope.listArray = data;
          $scope.loading='Done';

          $scope.email.name = $scope.listArray.name;
          $scope.email.description = $scope.listArray.description;
          $scope.email.servername = $scope.listArray.server;
          $scope.email.hostname = $scope.listArray.hostname;
          $scope.email.portno = $scope.listArray.port;
          $scope.email.email = $scope.listArray.email;
          $scope.email.sendername = $scope.listArray.sender;
      });
    };
    $scope.onload();

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

           $scope.updateEmailData();
           //window.location.href ="/#/app/email";
   	};

     $scope.updateEmailData = function () {
       EmailService.updateEmailconfig($scope.email, $scope.emailid).then(
        function (data)
        {
          console.log(data);
          console.log("after update in post"+data);
          $state.go('app.emailList'); 
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
              EmailService.deleteEmail($scope.emailid).then(
                function (data)
                {
                  console.log("after add in post"+data);
                   $state.go('app.emailList');
                   //location.reload();
                   //$scope.load();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };
});