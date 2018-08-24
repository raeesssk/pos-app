angular.module('vxl-mobile.connector').controller('connectorAddDatabaseCtrl',function($scope,$ionicPopup,$state,ConnectorService) {

    $scope.connector ={};

   
     $scope.authmodel = [{type: "Username and Password"}, {type: "Auth"}, {type: "Token"}, {type: "None"}];


    $scope.validate =function()
    {       
         var alpha=/^[a-z A-Z]+$/;
        var no=/^[0-9]+$/;
       
         if ($scope.connector.hostname === " " || $scope.connector.hostname === undefined) {
          $scope.validateMain($scope.connector.hostname,"Please Enter Host Name"); return false; }

         if (!($scope.connector.hostname).match(alpha)) {
            $scope.validateMain($scope.connector.hostname,"Please Enter Host Name in Alphabets"); return false;  }

        if ($scope.connector.port === " " || $scope.connector.port === undefined) {
          $scope.validateMain($scope.connector.port,"Please Enter Port Number"); return false; }

        if (!($scope.connector.port).match(no)) {
            $scope.validateMain($scope.connector.port,"Please Enter Port Number in Digit"); return false;  }

        if ($scope.connector.datatype === " " || $scope.connector.datatype === undefined) {
          $scope.validateMain($scope.connector.datatype,"Please Select Data Type"); return false; }

        // if ($scope.connector.specifydatabasetype === " " || $scope.connector.specifydatabasetype === undefined) {
        //   $scope.validateMain($scope.connector.specifydatabasetype,"Please Enter Specify Database Type"); return false; }

        // if ($scope.connector.uploaddriver === " " || $scope.connector.uploaddriver === undefined) {
        //   $scope.validateMain($scope.connector.uploaddriver,"Please Upload Driver"); return false; }

        if ($scope.connector.databasename === " " || $scope.connector.databasename === undefined) {
          $scope.validateMain($scope.connector.databasename,"Please Enter Database Name"); return false; }
     
       if($scope.connector.authenticationType === "Username and Password")
            { $scope.validateauthenticationusernamepswd();  }
       if($scope.connector.authenticationType === "Auth")
            { $scope.validateauthenticationauth(); }
       if($scope.connector.authenticationType === "Token")
            {  $scope.validateauthenticationtoken();   }
       if($scope.connector.authenticationType === "None")
            {  $scope.validateauthenticationnone();   }
         
           $scope.AddConnectorData();
           //window.location.href ="/#/app/connector";
           

    };

    $scope.AddConnectorData = function () {
       ConnectorService.createDatabaseDataSource($scope.connector).then(
        function (data)
        {
          console.log("after update in post"+data);
           localStorage.removeItem("menuType");
           $state.go('app.connectorList');
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


    $scope.validateauthenticationnone = function()
    {
        window.location.href ="/#/app/connector";
    };

    $scope.validateauthenticationusernamepswd = function()
    {
        if ($scope.connector.username === " " || $scope.connector.username === undefined) {
          $scope.validateMain($scope.connector.username,"Please Enter User Name"); return false; }

        if ($scope.connector.password === " " || $scope.connector.password === undefined) {
          $scope.validateMain($scope.connector.password,"Please Enter Password"); return false; }

        if ( $scope.connector.password != $scope.connector.confirmpassword) {
             $ionicPopup.alert({ title: 'Error', content: 'Please Confirm Password Not Match' }); return false; }
              window.location.href ="/#/app/connector";
    };
    
    $scope.validateauthenticationauth = function()
    {
         if ($scope.connector.key === " " || $scope.connector.key === undefined) {
          $scope.validateMain($scope.connector.key,"Please Enter Key"); return false; }

        if ($scope.connector.secret === " " || $scope.connector.secret === undefined) {
          $scope.validateMain($scope.connector.secret,"Please Enter Secret"); return false; }
           window.location.href ="/#/app/connector";
    };
    
    $scope.validateauthenticationtoken = function()
    {
         if ($scope.connector.token === " " || $scope.connector.token === undefined) {
          $scope.validateMain($scope.connector.token,"Please Enter Token"); return false; }
           window.location.href ="/#/app/connector";
    };


  

});