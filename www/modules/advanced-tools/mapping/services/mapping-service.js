
angular
    .module('MappingServices', [])
    .service('MappingService', MappingService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function MappingService($rootScope, $timeout, $http, GetService) {
  
    var url = "/mappingDefinitions";

    this.getMapping = function () {
     return new Promise(function(resolve, reject) {
        GetService.get(url).then(
        function successCallback(data) {
            // this callback will be called asynchronously
            // when the response is available
            var listArray = [{
                    "payload": { 
                         "data": data,
                          "page": {
                              "sectionTitle": "Mapping",
                              "state": "Mapping",
                              "title": "Mapping",
                            "actions": [{ "name": "delete","label": "Delete", "class":"trash", "tooltip":"Delete"  }]
                          }
                        }
                    }];

            resolve(listArray);
        });
    });
    };

    this.createMapping = function (groupData) {
        var data = {
            "name" : groupData.name,
            "description": groupData.description
        };
        return GetService.create(url, data);
    };

    this.editMapping = function(mapdata,id)
    {
    console.log(mapdata);
      var data = {
            "id" : id,
            "name" : mapdata.basicname,
            "description": mapdata.description
        };

         return GetService.update(url, data);
    };


     this.getByGroupId = function (id) {
        console.log("in local service"+id);
       return GetService.getById(url, id);
    };

    this.deleteMapping = function (id) {
        return GetService.deleteById(url, id);
    };
} 