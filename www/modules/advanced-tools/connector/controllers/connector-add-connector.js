angular.module('vxl-mobile.connector').controller('connectorAddConnectorCtrl',function($scope,$ionicPopup) {

    $scope.connector ={};

     var setmenuType = localStorage.getItem("menuType");
        console.log("in connectorAddConnectorCtrl"+setmenuType);

     $scope.authmodel = [{type: "Username and Password"}, {type: "Auth"}, {type: "Token"}, {type: "None"}];

     $scope.typechanged =function(menutype)
     {
        if (menutype === 'Database') {
            $scope.menutypeDatabase();
        }else if (menutype === 'REST') {
            $scope.menutypeREST();
        }else if (menutype === 'FTP') {
            $scope.menutypeFTP();
        }else if (menutype === 'Email') {
            $scope.menutypeEmail();
        }else if (menutype === 'JIRA') {
            $scope.menutypeJIRA();
        }else if (menutype === 'File') {
            $scope.menutypeFile();
        }else if (menutype === 'ServiceNow') {
            $scope.menutypeServiceNow();
        }else if (menutype === 'IBM') {
            $scope.menutypeIBM();
        }else if (menutype === 'Rational') {
            $scope.menutypeRational();
        }else if (menutype === 'GitHub') {
            $scope.menutypeGitHub();
        }else if (menutype === 'MS VSO') {
            $scope.menutypeMsVso();
        }else if (menutype === 'Foundation') {
            $scope.menutypeFoundation();
        }else if (menutype === 'Requirment') {
            $scope.menutypeRequirment();
        }else if (menutype === 'Quality Control') {
            $scope.menutypeQualityControl();
        }else if (menutype === 'ALM') {
            $scope.menutypeALM();
        }
     };

    $scope.menutypeDatabase = function (){     
        $scope.databaseContentDiv = true;
        $scope.restContentDiv = false; $scope.ftpContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeREST = function (){        
         $scope.restContentDiv = true;
         $scope.databaseContentDiv = false;$scope.ftpContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeFTP = function (){     
        $scope.ftpContentDiv = true;
        $scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeEmail = function (){     
        $scope.emailContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeJIRA = function (){     
        $scope.jiraContentDiv = true;
        $scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeFile = function (){     
        $scope.fileContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeServiceNow = function (){     
        $scope.derviceNowContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeIBM = function (){     
        $scope.ibmContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    // $scope.menutypeRationals = function (){     
    //     $scope.ftpContentDiv = true;
    //     $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    // };
    $scope.menutypeRational = function (){     
        $scope.rationalContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
    $scope.menutypeGitHub = function (){     
        $scope.GitHubContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
     $scope.menutypeMsVso = function (){     
        $scope.MSVSOContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
     $scope.menutypeFoundation = function (){     
        $scope.foundationContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
     $scope.menutypeRequirment = function (){     
        $scope.requirmentContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;$scope.almContentDiv = false;
    };
     $scope.menutypeQualityControl = function (){     
        $scope.qualityContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.almContentDiv = false;
    };
     $scope.menutypeALM = function (){     
        $scope.almContentDiv = true;
        $scope.ftpContentDiv = false;$scope.databaseContentDiv = false;$scope.restContentDiv = false;$scope.fileContentDiv = false;$scope.jiraContentDiv = false;$scope.derviceNowContentDiv = false;$scope.ibmContentDiv = false;$scope.rationalContentDiv = false;$scope.GitHubContentDiv = false;$scope.MSVSOContentDiv = false;$scope.foundationContentDiv = false;$scope.requirmentContentDiv = false;$scope.emailContentDiv = false;$scope.qualityContentDiv = false;
    };

     $scope.loadMenuType = function () {
        $scope.typechanged(setmenuType);
    };
    $scope.loadMenuType();

    $scope.validate =function()
    {       
        if($scope.databaseContentDiv === true)
             { $scope.validatedatabaseContentDiv(); }
        if($scope.restContentDiv === true)
             { $scope.validaterestContentDiv(); }
        if($scope.ftpContentDiv === true)
              { $scope.validateftpContentDiv(); }
        if($scope.emailContentDiv === true)
              { $scope.validateemailContentDiv(); }
        if($scope.jiraContentDiv === true)
              { $scope.validatejiraContentDiv(); }
        if($scope.fileContentDiv === true)
              { $scope.validatefileContentDiv(); }
        if($scope.derviceNowContentDiv === true)
               { $scope.validatederviceNowContentDiv(); }
        if($scope.ibmContentDiv === true)
              { $scope.validateibmContentDiv(); }
        if($scope.rationalContentDiv === true)
               { $scope.validaterationalContentDiv(); }
        if($scope.GitHubContentDiv === true)
               { $scope.validateGitHubContentDiv(); }
        if($scope.MSVSOContentDiv === true)
               { $scope.validateMSVSOContentDiv(); }
        if($scope.foundationContentDiv === true)
              { $scope.validatefoundationContentDiv(); }
        if($scope.requirmentContentDiv === true)
              { $scope.validaterequirmentContentDiv(); }
        if($scope.qualityContentDiv === true)
              { $scope.validatequalityContentDiv(); }
        if($scope.almContentDiv === true)
              { $scope.validatealmContentDiv(); }
    
       if($scope.connector.authenticationType === "Username and Password")
            { $scope.validateauthenticationusernamepswd();  }
       if($scope.connector.authenticationType === "Auth")
            { $scope.validateauthenticationauth(); }
       if($scope.connector.authenticationType === "Token")
            {  $scope.validateauthenticationtoken();   }
       if($scope.connector.authenticationType === "None")
            {  $scope.validateauthenticationnone();   }

    };


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

    $scope.validatedatabaseContentDiv = function()
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

        if ($scope.connector.specifydatabasetype === " " || $scope.connector.specifydatabasetype === undefined) {
          $scope.validateMain($scope.connector.specifydatabasetype,"Please Enter Specify Database Type"); return false; }

        // if ($scope.connector.uploaddriver === " " || $scope.connector.uploaddriver === undefined) {
        //   $scope.validateMain($scope.connector.uploaddriver,"Please Upload Driver"); return false; }

        if ($scope.connector.databasename === " " || $scope.connector.databasename === undefined) {
          $scope.validateMain($scope.connector.databasename,"Please Enter Database Name"); return false; }

    };

    $scope.validaterestContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.resturl === " " || $scope.connector.resturl === undefined) {
          $scope.validateMain($scope.connector.resturl,"Please Enter URL"); return false; }

        if (!($scope.connector.resturl).match(urlExp)) {
            $scope.validateMain($scope.connector.resturl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validateftpContentDiv = function()
    { 
        var alpha=/^[a-z A-Z]+$/;
        var no=/^[0-9]+$/;
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.server === " " || $scope.connector.server === undefined) {
          $scope.validateMain($scope.connector.server,"Please Enter Server Name"); return false; }

        if (!($scope.connector.server).match(alpha)) {
            $scope.validateMain($scope.connector.server,"Please Enter Server Name in Alphabets"); return false;  }

         if ($scope.connector.ftpport === " " || $scope.connector.ftpport === undefined) {
          $scope.validateMain($scope.connector.ftpport,"Please Enter Port Number"); return false; }

        if (!($scope.connector.ftpport).match(no)) {
            $scope.validateMain($scope.connector.ftpport,"Please Enter Port Number in Digit"); return false;  }

        if ($scope.connector.rootfolder === " " || $scope.connector.rootfolder === undefined) {
          $scope.validateMain($scope.connector.rootfolder,"Please Enter Root Folder"); return false; }
    };

    $scope.validateemailContentDiv = function()
    {
        var alpha=/^[a-z A-Z]+$/;
        var no=/^[0-9]+$/;
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.emailserver === " " || $scope.connector.emailserver === undefined) {
          $scope.validateMain($scope.connector.emailserver,"Please Enter Server Name"); return false; }

        if (!($scope.connector.emailserver).match(alpha)) {
            $scope.validateMain($scope.connector.emailserver,"Please Enter Server Name in Alphabets"); return false;  }

        if ($scope.connector.emailport === " " || $scope.connector.emailport === undefined) {
          $scope.validateMain($scope.connector.emailport,"Please Enter Port Number"); return false; }

        if (!($scope.connector.emailport).match(no)) {
            $scope.validateMain($scope.connector.emailport,"Please Enter Port Number in Digit"); return false;  }

        if ($scope.connector.protocol === " " || $scope.connector.protocol === undefined) {
          $scope.validateMain($scope.connector.protocol,"Please Select Protocol"); return false; }

        if ($scope.connector.emailemail === " " || $scope.connector.emailemail === undefined) {
          $scope.validateMain($scope.connector.emailemail,"Please Enter Email"); return false; }

        if (!($scope.connector.emailemail).match(urlExp)) {
            $scope.validateMain($scope.connector.emailemail,"Please Enter Email in Proper Formate"); return false;  }
    };

    $scope.validatejiraContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.jiraurl === " " || $scope.connector.jiraurl === undefined) {
          $scope.validateMain($scope.connector.jiraurl,"Please Enter URL"); return false; }

        if (!($scope.connector.jiraurl).match(urlExp)) {
            $scope.validateMain($scope.connector.jiraurl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validatefileContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.fileurl === " " || $scope.connector.fileurl === undefined) {
          $scope.validateMain($scope.connector.fileurl,"Please Enter URL"); return false; }

        if (!($scope.connector.fileurl).match(urlExp)) {
            $scope.validateMain($scope.connector.fileurl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validatederviceNowContentDiv = function()
    {
         var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.deviceurl === " " || $scope.connector.deviceurl === undefined) {
          $scope.validateMain($scope.connector.deviceurl,"Please Enter URL"); return false; }

        if (!($scope.connector.deviceurl).match(urlExp)) {
            $scope.validateMain($scope.connector.deviceurl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validateibmContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.ibmurl === " " || $scope.connector.ibmurl === undefined) {
          $scope.validateMain($scope.connector.ibmurl,"Please Enter URL"); return false; }

        if (!($scope.connector.ibmurl).match(urlExp)) {
            $scope.validateMain($scope.connector.ibmurl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validaterationalContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.rationalurl === " " || $scope.connector.rationalurl === undefined) {
          $scope.validateMain($scope.connector.rationalurl,"Please Enter URL"); return false; }

        if (!($scope.connector.rationalurl).match(urlExp)) {
            $scope.validateMain($scope.connector.rationalurl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validateGitHubContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.githuburl === " " || $scope.connector.githuburl === undefined) {
          $scope.validateMain($scope.connector.githuburl,"Please Enter URL"); return false; }

        if (!($scope.connector.githuburl).match(urlExp)) {
            $scope.validateMain($scope.connector.githuburl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validateMSVSOContentDiv = function()
    {
         var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.msvurl === " " || $scope.connector.msvurl === undefined) {
          $scope.validateMain($scope.connector.msvurl,"Please Enter URL"); return false; }

        if (!($scope.connector.msvurl).match(urlExp)) {
            $scope.validateMain($scope.connector.msvurl,"Please Enter URL in Proper Formate"); return false;  }
    };

    $scope.validatefoundationContentDiv = function()
    {
       var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.foundataionurl === " " || $scope.connector.foundataionurl === undefined) {
          $scope.validateMain($scope.connector.foundataionurl,"Please Enter URL"); return false; }

        if (!($scope.connector.foundataionurl).match(urlExp)) {
            $scope.validateMain($scope.connector.foundataionurl,"Please Enter URL in Proper Formate"); return false;  }
   };

    $scope.validaterequirmentContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.requirmenturl === " " || $scope.connector.requirmenturl === undefined) {
          $scope.validateMain($scope.connector.requirmenturl,"Please Enter URL"); return false; }

        if (!($scope.connector.requirmenturl).match(urlExp)) {
            $scope.validateMain($scope.connector.requirmenturl,"Please Enter URL in Proper Formate"); return false;  }
    };
    $scope.validatequalityContentDiv = function()
    {
        var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.qualityurl === " " || $scope.connector.qualityurl === undefined) {
          $scope.validateMain($scope.connector.qualityurl,"Please Enter URL"); return false; }

        if (!($scope.connector.qualityurl).match(urlExp)) {
            $scope.validateMain($scope.connector.qualityurl,"Please Enter URL in Proper Formate"); return false;  }

        if ($scope.connector.qualitydomain === " " || $scope.connector.qualitydomain === undefined) {
          $scope.validateMain($scope.connector.qualitydomain,"Please Enter Domain"); return false; }
    };
    $scope.validatealmContentDiv = function()
    {
       var urlExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if ($scope.connector.almurl === " " || $scope.connector.almurl === undefined) {
          $scope.validateMain($scope.connector.almurl,"Please Enter URL"); return false; }

        if (!($scope.connector.almurl).match(urlExp)) {
            $scope.validateMain($scope.connector.almurl,"Please Enter URL in Proper Formate"); return false;  }

        if ($scope.connector.almdomain === " " || $scope.connector.almdomain === undefined) {
          $scope.validateMain($scope.connector.almdomain,"Please Enter Domain"); return false; }
    };

});