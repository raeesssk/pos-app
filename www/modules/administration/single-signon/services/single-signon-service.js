
angular
    .module('SinglesignonServices', [])
    .service('SinglesignonService', SinglesignonService);

function SinglesignonService($rootScope, $timeout, $http, GetService) {
     //var url = "/sSOConfigs";
      var url = "/sso-config";

    this.getSignOn = function () {
      return new Promise(function(resolve, reject) {
        GetService.get(url).then(
        function successCallback(data) {
            // this callback will be called asynchronously
             var listArray = [{
                    "payload": { 
                        "data": data,
                        // "columns": [{ "show": true, "attribute": "Name", "label": "Name", "type": "string" }, 
                        //             { "show": true, "attribute": "Description", "label": "Description", "type": "string" },
                        //             { "show": true, "attribute": "signin_url", "label": "Single Sign In","type": "string" }, 
                        //             { "show": true, "attribute": "signout_url", "label": "Single Sign Out", "type": "string"
                        //          }],
                          "page": {
                              "sectionTitle": "Email",
                              "state": "email",
                              "title": "Single Sign On List",
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

    this.getBySignOn = function (id) {
        //Simple GET request example:
        return GetService.getById(url, id);
    };


    this.createSingleSign = function (singlesignData) {
      
      var data = {
          "cert_path" : singlesignData.name,
          "signin_url":  singlesignData.singinurl,
          "signout_url": singlesignData.singouturl,
          "changepassword_url": singlesignData.changepassword,
        
      };
      console.log(data);

        return GetService.create(url, data);
    };

    this.updateSingleSign = function (singlesignData) {
      
      var data = {
          "cert_path" : singlesignData.name,
          "signin_url": singlesignData.singinurl,
          "signout_url": singlesignData.singouturl,
          "changepassword_url": singlesignData.changepassword,
        
      };
        return GetService.update(url, data);
    };

     this.deleteSingleSign = function (id) {
       return GetService.deleteById(url, id);
    };

} 