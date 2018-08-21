angular.module('vxl-mobile').controller('globalCtrl', ["$scope", "$http", "$rootScope","$ionicPopup","$ionicModal", function ($scope, $http, $rootScope, $ionicPopup,$ionicModal) {

	console.log("GLobal controller called");
  
    // $rootScope.baseURL = 'http://unitech.3commastechnologies.com:3000';
    $rootScope.baseURL = 'http://localhost:3000';
    $rootScope.socket = io.connect($rootScope.baseURL);
    

    $ionicModal.fromTemplateUrl('logout-confirm.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
    $scope.logout = function(){
        $scope.openModal();
    }
  $scope.logoutConfirm = function(){
    localStorage.removeItem("pos_admin_access_token");
    localStorage.removeItem("first_name");
    //localStorage.clear();
    window.location = 'login.html';
  };

  $scope.firstName=localStorage.getItem("first_name");
  $rootScope.tokken=localStorage.getItem("pos_admin_access_token");
  console.log($rootScope.tokken);

  $rootScope.apiURL = "http://unitech.3commastechnologies.com:3000/events/rest";
  $rootScope.headerConfig = {
            'Content-Type': 'application/json',
            'X-Auth':localStorage.getItem("pos_admin_access_token")
    };
    // $scope.loading == "Done";


	$rootScope.validateMain = function(datamodel,msg)  {
 	
  		var alpha=/^[a-z A-Z]+$/;
  		var no=/^[0-9]+$/;
  		var mailExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
      var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  		    	
    	 if (datamodel === " " || datamodel === undefined) {
    	  	 $ionicPopup.alert({
              title: 'Error',
              content: msg  }); return false;}

   		  if (!(datamodel).match(alpha)) {
       	 	 $ionicPopup.alert({
                title: 'Error',
                content: msg  }); return false;}

       	if (!(datamodel).match(mailExp)) {
       	 	 $ionicPopup.alert({
                title: 'Error',
                content: msg  }); return false;}
   	 	 
        if (!(datamodel).match(no)) {
	   	 	   $ionicPopup.alert({
	            title: 'Error',
	            content: msg  }); return false;}

        if (!(datamodel).match(urlExp)) {
          $ionicPopup.alert({
              title: 'Error',
              content: msg  }); return false;}
      
    };

    $scope.choices = [{id: 'choice1'}];

    $scope.addNewChoice = function (index) {
       console.log(index);
      var newItemNo = $scope.choices.length + 1;
      $scope.choices.push({'id': 'choice' + newItemNo});
  };
  
   $scope.removeChoice = function (index) {
      $scope.choices.splice(index, 1);
  };

    /*  ------------star of filter js used in every module-------------*/

    $scope.divbytime = false;
    $scope.divbyvalue = false;
    $scope.customdiv = false;

    $scope.ontimeselect = function()
    {
      $scope.divbytime = true;
      $scope.divbyvalue = false;
      $scope.customdiv = false;
    };

     $scope.onvalueselect = function()
    {
      $scope.divbytime = false;
      $scope.customdiv = false;
      $scope.divbyvalue = true;
    };

    $scope.ondurationselect = function(data)
    {
      if(data == "custom")
      { $scope.customdiv = true; }
      else{  $scope.customdiv = false; }
    };

    $scope.currentfromdateDate = new Date();
     $scope.currenttodateDate = new Date();
      
    $scope.datePickerCallbackfromdate = function (val) {
      if (!val) { 
        console.log('Date not selected');
      } else {
        console.log('Selected date is : ', val);
      }
    };

    $scope.datePickerCallbacktodate = function (val) {
      if (!val) { 
        console.log('Date not selected');
      } else {
        console.log('Selected date is : ', val);
      }
    };

    /* ---------end of filter js used in every module-------------*/

    /* ----------start of switches managment in email and authentication module----------*/

      $scope.primaryswitch =function(obj, event, id,arrlist)
      {
         if(obj.enable == "off" || obj.primary === true )  {
             obj.enable = true;
             obj.primary = true;
          }

          if(obj.enable === true) {
              angular.forEach(arrlist, function (value, key) {
                  if(value.primary === true) {
                    value.primary =false; }
               });
            obj.primary =true;
           }
          else{ event.preventDefault();
                obj.primary = false;  }
       
       if (obj.primary === false && obj.enable === true) {
          obj.enable = true;
          obj.primary = true;
       }
     
      };

      $scope.enableswitch =function(obj, event, id)
      {
          if (obj.enable === false && obj.primary === true) {
              obj.enable = true;
              obj.primary = true;
            }
      };

    /* ----------end of switches managment in email and authentication module----------*/


    $scope.dropmodel = [{
        "type": "Database",
        "classes": "pe-7s-server text-primary"
    }, {
        "type": "REST",
        "classes": "pe-7s-repeat text-primary"
    }, {
        "type": "FTP",
        "classes": "pe-7s-shuffle text-primary"
    }, {
        "type": "Email",
        "classes": "pe-7s-mail text-primary"
    }, {
        "type": "File",
        "classes": "pe-7s-file text-primary"
    }, {
        "type": "JIRA",
        "classes": "pe-7s-ribbon text-primary"
    }, {
        "type": "Foundation",
        "classes": "pe-7s-box2 text-primary"
    }, {
        "type": "Requirment",
        "classes": "pe-7s-pen text-primary"
    }, {
        "type": "Quality Control",
        "classes": "pe-7s-map text-primary"
    }, {
        "type": "ServiceNow",
        "classes": "pe-7s-signal text-primary"
    }, {
        "type": "IBM",
        "classes": "pe-7s-wallet text-primary"
    }, {
        "type": "Rational",
        "classes": "pe-7s-timer text-primary"
    }, {
        "type": "GitHub",
        "classes": "pe-7s-ticket text-primary"
    }, {
        "type": "MS VSO",
        "classes": "pe-7s-star text-primary"
    }, {
        "type": "ALM",
        "classes": "pe-7s-map text-primary"
    }];



}]);