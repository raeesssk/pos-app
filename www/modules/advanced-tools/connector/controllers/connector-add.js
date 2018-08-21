angular.module('vxl-mobile.connector').controller('connectorAddCtrl',function($scope) {

    $scope.connector ={};

     var setmenuType = localStorage.getItem("menuType");
 
    $scope.autoExpand = function(e) {
          var element = typeof e === 'object' ? e.target : document.getElementById(e);
        var scrollHeight = element.scrollHeight -80; // replace 60 by the sum of padding-top and padding-bottom
        element.style.height = scrollHeight +80+ "px";    
    };
  
    function expand() {
      $scope.autoExpand('TextArea');
    }

    $scope.validate = function()
    {
      $scope.alpha=/^[a-z A-Z]+$/;
      $scope.no=/^[0-9]+$/;
      
       if ($scope.connector.name === " " || $scope.connector.name === undefined) {
          $scope.validateMain($scope.connector.name,"Please Enter connector Name"); return false; }

       if (!($scope.connector.name).match($scope.alpha)) {
            $scope.validateMain($scope.connector.name,"Please Enter connector Name in Alphabets"); return false;  }

        // localStorage.setItem("connect-name", $scope.connector.name);
        // localStorage.setItem("connect-description", $scope.connector.description);

        //window.location.href ="/#/app/connector-add-connector";

        // if (setmenuType === 'Database') {
        //    window.location.href ="/#/app/connector-add-database";
        // }else if (setmenuType === 'REST') {
        //     window.location.href ="/#/app/connector-add-rest";
        // }else if (setmenuType === 'FTP') {
        //      window.location.href ="/#/app/connector-add-ftp";
        // }else if (setmenuType === 'Email') {
        //      window.location.href ="/#/app/connector-add-email";
        // }else if (setmenuType === 'JIRA') {
        //     window.location.href ="/#/app/connector-add-jira";
        // }else if (setmenuType === 'File') {
        //      window.location.href ="/#/app/connector-add-file";
        // }else if (setmenuType === 'ServiceNow') {
        //      window.location.href ="/#/app/connector-add-service";
        // }else if (setmenuType === 'IBM') {
        //     window.location.href ="/#/app/connector-add-ibm";
        // }else if (setmenuType === 'Rational') {
        //      window.location.href ="/#/app/connector-add-email";
        // }else if (setmenuType === 'GitHub') {
        //      window.location.href ="/#/app/connector-add-email";
        // }else if (setmenuType === 'MS VSO') {
        //      window.location.href ="/#/app/connector-add-email";
        // }else if (setmenuType === 'Foundation') {
        //      window.location.href ="/#/app/connector-add-foundation";
        // }else if (setmenuType === 'Requirment') {
        //      window.location.href ="/#/app/connector-add-requirment";
        // }else if (setmenuType === 'Quality Control') {
        //      window.location.href ="/#/app/connector-add-quality";
        // }else if (setmenuType === 'ALM') {
        //      window.location.href ="/#/app/connector-add-email";
        // }

   };

});