
angular
    .module('RoleServices', [])
    .service('RoleService', RoleService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function RoleService($rootScope, $timeout, $http, GetService) {

   var url = "/aaiadmin/role";

    this.getRoles = function () {
        //Simple GET request example:
            return new Promise(function(resolve, reject) {
        GetService.get(url).then(
        function successCallback(data) {
            // this callback will be called asynchronously
            var listArray = [{
                    "payload": { 
                        "data": data,
                        "columns": [{  "show": true, "attribute": "name", "label": "Name", "type": "string"  }, 
                                    {  "show": true, "attribute": "description", "label": "Description","type": "string" 
                                 }],
                            "page": {  "sectionTitle": "Role",  "state": "Role","title": "Role"
                             
                          }
                        }
                    }];

            resolve(listArray);
        });
     });

     //return GetService.get(this.baseUrl + url);
    };

    this.getByRoles = function (id) {
        //Simple GET request example:
        return GetService.getById(url, id);
    };

    this.createRoles = function (groupData) {
        //Simple GET request example:
       var data ={
                "name": groupData.name,
                "description": groupData.description
                };

                console.log(groupData);
        return GetService.create(url, data);
    };

    this.updateRole = function (groupData,id) {
        //Simple GET request example:
        console.log(groupData);
        var data ={
                "name": groupData.name,
                "id" : id,
                "description": groupData.description
                };
        return GetService.update(url, data);
    };

    this.deleteRole = function (id) {
        console.log(id);
       return GetService.deleteById(url, id);
    };
} 