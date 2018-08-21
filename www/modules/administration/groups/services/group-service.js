
angular
    .module('GroupsServices', [])
    .service('GroupsService', GroupsService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function GroupsService($rootScope, $timeout, $http, GetService) {
    var url = "/aaiadmin/group";
   
    this.getGroups = function () {

      return new Promise(function(resolve, reject) {
        GetService.get(url).then(
        function successCallback(data) {
            // this callback will be called asynchronously
            var listArray = [{
                    "payload": { 
                        "data": data,
                          "page": {
                              "sectionTitle": "Groups",
                              "state": "Groups",
                              "title": "Groups",
                              "actions": [{ "name": "delete","label": "Delete", "class":"trash", "tooltip":"Delete"  }, 
                                          { "name": "clone", "label": "Clone",  "class":"clone",  "tooltip":"Clone" 
                                        }]
                          }
                        }
                    }];

            resolve(listArray);
        });
    });
    };

    this.getGroupById = function (id) {
        //Simple GET request example:
        return GetService.getById(url,id);
    };

    this.createGroups = function (groupData) {
        //Simple GET request example:
     var data ={  
                "name": groupData.name,
                "description": groupData.description  
                };

        return GetService.create(url, data);
    };

       this.updateGroups = function (groupData , id) {
        //Simple GET request example:
          var data ={  
                "id":id,
                "name": groupData.name,
                "description": groupData.description  
                };

        return GetService.update(url, data);
    };

    this.groupDelete = function (id) {
        console.log("in service "+id);
         return GetService.deleteById(url,id);
    };

  

} 