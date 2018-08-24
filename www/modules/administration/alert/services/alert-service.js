
angular
    .module('alertServices',[])
    .service('alertService', alertService);

function alertService($rootScope, $timeout,$http,GetService) {
	
    var url = "/alert";
    var urlSubjectArea = "/aaiadmin/subject-area";

    this.getSubjectArea = function(){
        //Simple GET request example:
       return GetService.get(urlSubjectArea);
    };

    this.getByAlert = function (id) {
        //Simple GET request example:
        return GetService.getById(url, id);
    };


    this.getAlert = function (page) {
      var urlPage=url+"?page="+page;
      return new Promise(function(resolve, reject) {
        GetService.get(urlPage).then(
        function successCallback(data) {
            // this callback will be called asynchronously
            var listArray = [{
                        "payload": { 
                           "data": data
                            }
                      }];

                resolve(listArray);
            });
        });
    };
  
    this.createAlert = function(alertData){
       var data = {
            "name": alertData.name,
            "description": alertData.description,
            "subjectAreaId": alertData.subjectArea
        };
   
        return GetService.create(url, data); 
    };

    this.updateAlert = function(alertData,id){
        //Simple GET request example:
        var data = {
            "id":id,
            "name": alertData.name,
            "description": alertData.description,
            "subjectAreaId": alertData.subjectArea
        };
       return GetService.update(url,data);    
    };    
   
} 