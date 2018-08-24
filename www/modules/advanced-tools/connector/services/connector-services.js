
angular
    .module('ConnectorServices', [])
    .service('ConnectorService', ConnectorService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function ConnectorService($rootScope, $timeout, $http, GetService,$q) {
    //  var url = "/datasource-rest";
    // var urldb = "/datasource-db";

    var urlRest = "/datasource-rest";
    var urlmail = "/datasource-mail";
    var urlFtp = "/datasource-sftp";
    var urlJira= "/datasource-jira";
    var urldb = "/datasource-db";

    this.getDatasource = function () {
     return new Promise(function(resolve, reject) {
         GetService.get(urlFtp).then(
          function successCallback(data) {
              resolve(data);
          });
      });
    };
    this.getRest = function () {
     return new Promise(function(resolve, reject) {
         GetService.get(urlRest).then(
          function successCallback(data) {
              resolve(data);
          });
      });
    };
    this.getEmail = function () {
     return new Promise(function(resolve, reject) {
         GetService.get(urlmail).then(
          function successCallback(data) {
              resolve(data);
          });
      });
    };
    this.getFTP = function () {
     return new Promise(function(resolve, reject) {
         GetService.get(urlFtp).then(
          function successCallback(data) {
              resolve(data);
          });
      });
    };
    this.getJira = function () {
     return new Promise(function(resolve, reject) {
         GetService.get(urlJira).then(
          function successCallback(data) {
              resolve(data);
          });
      });
    };


    this.getByIdDatabase = function (id) {
        return GetService.getById(urldb, id);
    };

    this.createRestDataSource = function (sourceData) {
        var data = {
            "name" : sourceData.name
          };
        return GetService.create(urlRest, data);
    };

    this.createDatabaseDataSource = function (connect) {
        var data = {
            "name" : connect.name
          };
         return GetService.create(urldb, data);
    };

     this.updateDatabaseDataSource = function (connect,id) {

        var data = {
            "id":id,
            "name" : connect.name
          };
          return GetService.updateById(urldb, data,id);
    };

    this.createFtpDataSource = function (sourceData) {
         var data = {
            "name" : sourceData.name
        };
        return GetService.create(urlFtp, data);
    };

    this.createJiraDataSource = function (sourceData) {
         var data = {
            "name" : sourceData.name
        };
        return GetService.create(urlJira, data);
    };

     this.getByIdMail = function (id) {
        return GetService.getById(urlmail, id);
    };

    this.createMailDataSource = function (sourceData) {
         var data = {
            "url" : sourceData.name
        };
        return GetService.create(urlmail, data);
    };


  this.updateEmailDataSource = function (connect,id) {

    var data = {
        "id":id,
        "name" : connect.name
      };
      return GetService.updateById(urlmail, data);
    };

  this.updateJiraDataSource = function (connect,id) {
    var data = {
        "id":id,
        "name" : connect.name
      };
      return GetService.updateById(urlmail, data);
    };

  this.updateFtpDataSource = function (connect,id) {
    var data = {
        "id":id,
        "name" : connect.name
      };
      return GetService.updateById(urlmail, data);
    };

  this.updateRestDataSource = function (connect,id) {
     var data = {
        "id":id,
        "name" : connect.name
      };
      return GetService.updateById(urlmail, data);
    };


     this.deletedatabase = function (id) {
       return GetService.deleteById(urldb, id);
    };

    this.deleterest = function (id) {
       return GetService.deleteById(urlRest, id);
    };

     this.deleteftp = function (id) {
       return GetService.deleteById(urlFtp, id);
    };

    this.deletejira = function (id) {
       return GetService.deleteById(urlJira, id);
    };

    this.deleteemail = function (id) {
       return GetService.deleteById(urlmail, id);
    };
   
} 