

angular
    .module('TemplateServices',[])
    .service('TemplateService', TemplateService);

function TemplateService($rootScope, $timeout,$http,GetService) {
	// this.baseUrl = "modules";
	// var url = "/administration/template/template.json";
    var url = "/notification-preference";


     this.getTemplate = function(){
           
        return new Promise(function(resolve, reject) {
        GetService.get(url).then(
        function successCallback(data) {
            // this callback will be called asynchronously
            // when the response is available
            var listArray = [{
                    "payload": {
                        "pagination": {
                            "totalItems": 8,
                            "offset": 0,
                            "limit": 8
                        },
                        "data": data,
                        "columns":  [{ "show": true,"attribute": "name","label": "Template Name", "type": "string" }, 
                                     { "show": true,"attribute": "subject","label": "Subject", "type": "string" }, 
                                     { "show": true,"attribute": "templateTypeEnum", "label": "Type", "type": "string" }, 
                                     { "show": true,"attribute": "triggerEnum","label": "Trigger","type": "string" }],
                          "page": {
                              "sectionTitle": "Templates",
                              "state": "Templates",
                              "title": "Notification Templates",
                                "actions": [{ "name": "delete","label": "Delete", "class":"trash", "tooltip":"Delete"  }]
                          }
                        }
                    }];

            resolve(listArray);
        });
    });
    };

    this.getByTemplate = function(id){
        //Simple GET request example:
        return GetService.getById(url,id);    
    };

    this.createTemplate = function(templateData){
        //Simple GET request example:
        // var data = "";
        // data = data + 'name=' + templateData.name;

        var data={
            "name": templateData.name,
            "description": templateData.description,
            "templateTypeEnum": templateData.type,
            "triggerEnum": templateData.trigger,
            "subject": templateData.subject,
            "body" : templateData.body,
            "notes" : templateData.notes,
            "delay" : templateData.delay,

         };
        return GetService.create(url,data);    
    };

    







    // this.getTemplate = function(){
    //     return GetService.get(this.baseUrl+url);	
    // };
    
    // this.getByTemplate = function(id){
    //     return GetService.getById(this.baseUrl+url,id);    
    // };

    // this.createTemplate = function(templateData){
    //     var data = "";
    //     data = data + 'name=' + templateData.name;
    //  return GetService.create(this.baseUrl+url,data);    
    // };

    // this.updateTemplate = function(templateData){
    //     var data = "";
    //     data = data + 'name=' + templateData.name;
    //   return GetService.create(this.baseUrl+url,data);    
    // };
   
} 