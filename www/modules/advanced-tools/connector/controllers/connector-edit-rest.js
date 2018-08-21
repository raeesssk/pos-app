angular.module('vxl-mobile.connector').controller('connectorEditRestCtrl',function($scope,$ionicPopup,ConnectorService,$state) {

    $scope.connector ={};

 
     $scope.authmodel = [{type: "Username and Password"}, {type: "Auth"}, {type: "Token"}, {type: "None"}];

     var local_storage_data = localStorage.getItem("connector-data");
          console.log(local_storage_data.id);


    $scope.validate =function()
    {       
       //  var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

       //  if ($scope.connector.resturl === " " || $scope.connector.resturl === undefined) {
       //    $scope.validateMain($scope.connector.resturl,"Please Enter URL"); return false; }

       //  if (!($scope.connector.resturl).match(urlExp)) {
       //      $scope.validateMain($scope.connector.resturl,"Please Enter URL in Proper Formate"); return false;  }

     
       // if($scope.connector.authenticationType === "Username and Password")
       //      { $scope.validateauthenticationusernamepswd();  }
       // if($scope.connector.authenticationType === "Auth")
       //      { $scope.validateauthenticationauth(); }
       // if($scope.connector.authenticationType === "Token")
       //      {  $scope.validateauthenticationtoken();   }
       // if($scope.connector.authenticationType === "None")
       //      {  $scope.validateauthenticationnone();   }

       //  localStorage.removeItem("menuType");
       //  window.location.href ="/#/app/connector";
        $scope.UpdateRestData();

    };

     $scope.UpdateRestData = function () {
       ConnectorService.updateRestDataSource($scope.connector,local_storage_data.id).then(
        function (data)
        {
          console.log("after add in post"+data);
           localStorage.removeItem("connector-data");
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