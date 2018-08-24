
angular
    .module('agentServices', [])
    .service('agentService', agentService);

function agentService($rootScope, $timeout, $http, GetService) {
   var url = "/agent";
 
    this.getAgent = function () {
      return new Promise(function(resolve, reject) {
        GetService.get(url).then(
        function successCallback(data) {
            // when the response is available
            var listArray = [{
                    "payload": {
                        "data": [{
                                  "name":"Database Agent",
                                  "status" : "Online",
                                  "enabled": true
                              },
                              {
                                  "name":"Remote Oracle Agent",
                                  "status" : "Offline",
                                  "enabled": true          
                              },
                              {
                                  "name":"JIRA Agent",
                                  "status" : "Online",
                                  "enabled": true     
                              },{
                                  "name":"Database Agent",
                                  "status" : "Online",
                                  "enabled": true
                              },
                              {
                                  "name":"Remote Oracle Agent",
                                  "status" : "Offline",
                                  "enabled": true          
                              },
                              {
                                  "name":"JIRA Agent",
                                  "status" : "Online",
                                  "enabled": true     
                              }],
                        
                          // "columns": [{    "show": true, "attribute": "name", "label": "Name", "type": "string"  }, 
                          //             {   "show": true, "attribute": "description", "label": "Description", "type": "string"   
                          //             }],
                          //   "page": {
                          
                          // "sectionTitle": "Agent",
                          // "state": "Agent",
                          // "title": "Agent",
                          // "actions": [{ "name": "delete","label": "Delete", "class":"trash", "tooltip":"Delete"  }, 
                          //             { "name": "clone", "label": "Clone",  "class":"clone",  "tooltip":"Clone" },
                          //             { "name": "download", "label": "Download", "class" :"download", "tooltip":"Download"
                          //           }]
                           }
                        
                        }];

            resolve(listArray);
        });
    });
    
    };

    this.getByAgent = function (id) {
        //Simple GET request example:
        return GetService.getById(url, id);
    };


    this.createAgent = function (agentData) {
          
            var data ={
            "name": agentData.name,
            "description": agentData.description
            };

            console.log(data);
         return GetService.create(url, data);
    };

    this.updateAgent = function (agentData) {
          var data ={
            "id" : agentData.id,
            "name": agentData.name,
            "description": agentData.description
          };
      return GetService.update(url, data);

    };

    this.deleteAgent = function (id) {
       return GetService.deleteById(url, id);
    };

} 