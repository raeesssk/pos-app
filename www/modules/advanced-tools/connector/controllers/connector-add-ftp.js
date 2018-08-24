angular.module('vxl-mobile.connector').controller('connectorAddFTPCtrl',function($scope,$ionicPopup,ConnectorService,$state) {

    $scope.connector ={};

     $scope.authmodel = [{type: "Username and Password"}, {type: "Auth"}, {type: "Token"}, {type: "None"}];


    $scope.validate =function()
    {       
       //  var alpha=/^[a-z A-Z]+$/;
       //  var no=/^[0-9]+$/;
       //  var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

       //  if ($scope.connector.server === " " || $scope.connector.server === undefined) {
       //    $scope.validateMain($scope.connector.server,"Please Enter Server Name"); return false; }

       //  if (!($scope.connector.server).match(alpha)) {
       //      $scope.validateMain($scope.connector.server,"Please Enter Server Name in Alphabets"); return false;  }

       //   if ($scope.connector.ftpport === " " || $scope.connector.ftpport === undefined) {
       //    $scope.validateMain($scope.connector.ftpport,"Please Enter Port Number"); return false; }

       //  if (!($scope.connector.ftpport).match(no)) {
       //      $scope.validateMain($scope.connector.ftpport,"Please Enter Port Number in Digit"); return false;  }

       //  if ($scope.connector.rootfolder === " " || $scope.connector.rootfolder === undefined) {
       //    $scope.validateMain($scope.connector.rootfolder,"Please Enter Root Folder"); return false; }

     
       // if($scope.connector.authenticationType === "Username and Password")
       //      { $scope.validateauthenticationusernamepswd();  }
       // if($scope.connector.authenticationType === "Auth")
       //      { $scope.validateauthenticationauth(); }
       // if($scope.connector.authenticationType === "Token")
       //      {  $scope.validateauthenticationtoken();   }
       // if($scope.connector.authenticationType === "None")
       //      {  $scope.validateauthenticationnone();   }

       $scope.AddConnectorData();

    };

     $scope.AddConnectorData = function () {
       ConnectorService.createFtpDataSource($scope.connector).then(
        function (data)
        {
          console.log("after update in post"+data);
           localStorage.removeItem("menuType");
           $state.go('app.connectorList');
      });
   };


    // $scope.validateauthenticationnone = function()
    // {
    //     window.location.href ="/#/app/connector";
    // };

    // $scope.validateauthenticationusernamepswd = function()
    // {
    //     if ($scope.connector.username === " " || $scope.connector.username === undefined) {
    //       $scope.validateMain($scope.connector.username,"Please Enter User Name"); return false; }

    //     if ($scope.connector.password === " " || $scope.connector.password === undefined) {
    //       $scope.validateMain($scope.connector.password,"Please Enter Password"); return false; }

    //     if ( $scope.connector.password != $scope.connector.confirmpassword) {
    //          $ionicPopup.alert({ title: 'Error', content: 'Please Confirm Password Not Match' }); return false; }
    //           window.location.href ="/#/app/connector";
    // };
    
    // $scope.validateauthenticationauth = function()
    // {
    //      if ($scope.connector.key === " " || $scope.connector.key === undefined) {
    //       $scope.validateMain($scope.connector.key,"Please Enter Key"); return false; }

    //     if ($scope.connector.secret === " " || $scope.connector.secret === undefined) {
    //       $scope.validateMain($scope.connector.secret,"Please Enter Secret"); return false; }
    //        window.location.href ="/#/app/connector";
    // };
    
    // $scope.validateauthenticationtoken = function()
    // {
    //      if ($scope.connector.token === " " || $scope.connector.token === undefined) {
    //       $scope.validateMain($scope.connector.token,"Please Enter Token"); return false; }
    //        window.location.href ="/#/app/connector";
    // };



});