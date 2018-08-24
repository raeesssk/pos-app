angular.module('vxl-mobile.connector').controller('connectorListCtrl',function($scope,$http,ConnectorService,$ionicPopup) {

    console.log("connector list controller triggered");

    $scope.listArray=[];
    // $scope.temp = "database";

    $scope.temp1 = [];

     $scope.onload = function () {

          ConnectorService.getDatasource().then(
          function (data)
          {
              $scope.dbList=data;
               angular.forEach($scope.dbList.content,function(value,key){
                 value.connector_type = "database";
                  $scope.listArray.push(value);
              });
          });

          ConnectorService.getRest().then(
          function (data)
          {
              $scope.restList=data;
               angular.forEach($scope.restList.content,function(value,key){
                  value.connector_type = "rest";
                  $scope.listArray.push(value);
               
              });
          });

          ConnectorService.getEmail().then(
          function (data)
          {
              $scope.emailList=data;
               angular.forEach($scope.emailList.content,function(value,key){
                value.connector_type = "email";
                  $scope.listArray.push(value);
              });
          });

          ConnectorService.getFTP().then(
          function (data)
          {
              $scope.ftpList=data;
               angular.forEach($scope.ftpList.content,function(value,key){
                value.connector_type = "ftp";
                  $scope.listArray.push(value);
              });
          });

          ConnectorService.getJira().then(
          function (data)
          {
              $scope.jiraList=data;
               angular.forEach($scope.jiraList.content,function(value,key){
                value.connector_type = "jira";
                  $scope.listArray.push(value);
              });
          });
      };
      $scope.onload();


      $scope.editrecord = function(data){
         if(data.connector_type ==='database')
        {  
          localStorage.setItem("connector-data", data);
           window.location.href="/#/app/connector-edit-database/" + data.id;
        }
         if(data.connector_type ==='rest')
        {
          localStorage.setItem("connector-data", data);
          window.location.href="/#/app/connector-edit-rest";
        }
         if(data.connector_type ==='jira')
        {
          localStorage.setItem("connector-data", data);
          window.location.href="/#/app/connector-edit-jira";
        }
         if(data.connector_type ==='ftp')
        {
          localStorage.setItem("connector-data", data);
          window.location.href="/#/app/connector-edit-ftp";
        }
         if(data.connector_type ==='email')
        {
          localStorage.setItem("connector-data", data);
          var setmenuType = localStorage.getItem("connector-data");
          console.log(setmenuType.id);
           window.location.href="/#/app/connector-edit-email";
        }

      };


      $scope.onItemDelete = function(data) {  

         if(data.connector_type ==='database')
        {  
           $scope.deleteItem(data.id);
        }
         if(data.connector_type ==='rest')
        {
           $scope.deleterestItem(data.id);
        }
         if(data.connector_type ==='jira')
        {
           $scope.deletejiraItem(data.id);
        }
         if(data.connector_type ==='ftp')
        {
          $scope.deleteftpItem(data.id);
        }
         if(data.connector_type ==='email')
        {
           $scope.deleteemailItem(data.id);
        }

      };


    $scope.deletedatabaseItem = function(id) {  

       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });
        
        confirmPopup.then(function(res) {
           if(res) {
              ConnectorService.deletedatabase(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                  $scope.onload();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };

    $scope.deleterestItem = function(id) {  
      var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });
        
        confirmPopup.then(function(res) {
           if(res) {
              ConnectorService.deleterest(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                  $scope.onload();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };

       $scope.deletejiraItem = function(id) {  

       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });
        
        confirmPopup.then(function(res) {
           if(res) {
              ConnectorService.deletejira(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                  $scope.onload();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };

       $scope.deleteftpItem = function(id) {  

       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });
        
        confirmPopup.then(function(res) {
           if(res) {
              ConnectorService.deleteftp(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                  $scope.onload();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };

       $scope.deleteemailItem = function(id) {  

       var confirmPopup = $ionicPopup.confirm({
           title: 'Delete',
           template: 'Are you sure Want to Delete the record?'
        });
        
        confirmPopup.then(function(res) {
           if(res) {
              ConnectorService.deleteemail(id).then(
                function (data)
                {
                  console.log("after add in post"+data);
                  $scope.onload();
                });

           } else {
              console.log('Not sure!');
           }
        }); 
    };

});