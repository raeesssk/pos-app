angular.module('vxl-mobile.connector').controller('connectorAddConnectorTypeCtrl',function($scope) {

    $scope.connector ={};

    $scope.typechanged = function (menutype) {
    	localStorage.setItem("menuType", menutype);
        // window.location.href ="/#/app/connector-add";
         var setmenuType = localStorage.getItem("menuType");

        if (setmenuType === 'Database') {
           window.location.href ="/#/app/connector-add-database";
        }else if (setmenuType === 'REST') {
            window.location.href ="/#/app/connector-add-rest";
        }else if (setmenuType === 'FTP') {
             window.location.href ="/#/app/connector-add-ftp";
        }else if (setmenuType === 'Email') {
             window.location.href ="/#/app/connector-add-email";
        }else if (setmenuType === 'JIRA') {
            window.location.href ="/#/app/connector-add-jira";
        }else if (setmenuType === 'File') {
             window.location.href ="/#/app/connector-add-file";
        }else if (setmenuType === 'ServiceNow') {
             window.location.href ="/#/app/connector-add-service";
        }else if (setmenuType === 'IBM') {
            window.location.href ="/#/app/connector-add-ibm";
        }else if (setmenuType === 'Rational') {
             window.location.href ="/#/app/connector-add-email";
        }else if (setmenuType === 'GitHub') {
             window.location.href ="/#/app/connector-add-email";
        }else if (setmenuType === 'MS VSO') {
             window.location.href ="/#/app/connector-add-email";
        }else if (setmenuType === 'Foundation') {
             window.location.href ="/#/app/connector-add-foundation";
        }else if (setmenuType === 'Requirment') {
             window.location.href ="/#/app/connector-add-requirment";
        }else if (setmenuType === 'Quality Control') {
             window.location.href ="/#/app/connector-add-quality";
        }else if (setmenuType === 'ALM') {
             window.location.href ="/#/app/connector-add-email";
        }

    };


});