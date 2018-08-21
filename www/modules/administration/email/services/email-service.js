
angular
    .module('EmailServices', [])
    .service('EmailService', EmailService);

function EmailService($rootScope, $timeout, $http, GetService) {
    //var url = "/emailConfigs";
    var url = "/email-config";

    this.getEmails = function (page) {
        var urlPage=url+"?page="+page;
      return new Promise(function(resolve, reject) {
        GetService.get(urlPage).then(
        function successCallback(data) {
            // this callback will be called asynchronously
            var listArray = [{
                        "payload": { 
                         
                          "data": data,
                          // "columns": [{ "show": true, "attribute": "server", "label": "Server", "type": "string"  }, 
                          //             { "show": true, "attribute": "email", "label": "Email", "type": "string"   }, 
                          //             { "show": true,"attribute": "hostname", "label": "Host", "type": "string" }, 
                          //             { "show": true,"attribute": "port", "label": "Port", "type": "number"    }, 
                          //             { "show": true,"attribute": "sender","label": "Sender", "type": "string"  }],
                            "page": {
                                "sectionTitle": "Email",
                                "state": "email",
                                "title": "Mail Server",
                                "actions": [{ "name": "view","label": "View"}, 
                                            { "name": "add", "label": "Add" }, 
                                            { "name": "edit","label": "Edit" },
                                            { "name": "delete", "label": "Delete"
                                          }]
                               }
                            }
                      }];

                resolve(listArray);
            });
        });
    };
    
    this.getByEmail = function (id) {
        //Simple GET request example:
        return GetService.getById(url, id);
    };

    this.createEmailconfig = function (emailData) {
        //Simple GET request example:
      var data = {
           "name": emailData.name,
          "description": emailData.description,
          "email": emailData.email,
          "hostname": emailData.hostname,
          "password": emailData.password,
          "port": emailData.portno,
          "sender": emailData.sendername,
          "server": emailData.servername
        }

        return GetService.create(url, data);
    };

    this.updateEmailconfig = function (emailData,id) {
        console.log(id);
        //Simple GET request example:
       var data = {
            "id": id,
            "name": emailData.name,
            "description": emailData.description,
            "email": emailData.email,
            "hostname": emailData.hostname,
            "password": emailData.password,
            "port": emailData.portno,
            "sender": emailData.sendername,
            "server": emailData.servername
          }
        console.log(data);
        //return GetService.update(url, data);
        return GetService.updateById(url, data, id);
    };

    this.updateEmailPopupConfig = function (emailData) {
     var data = {
          "id" : emailData.id,
          "server": emailData.name
        }

        return GetService.update(url, data);
    };

    this.deleteEmail = function (id) {
        return GetService.deleteById(url, id);
    };

} 