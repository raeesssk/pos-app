
angular
    .module('settingServices',[])
    .service('settingService', settingService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function settingService($rootScope, $timeout,$http,GetService) {
	this.baseUrl = "modules";
	var url = "/administration/setting/setting.json";
    var url2 = "/administration/setting/setting-info.json";

    this.getSetting = function(){
        //Simple GET request example:
        return GetService.get(this.baseUrl+url);	
    };

     this.getSettingInfo = function(){
        //Simple GET request example:
        return GetService.get(this.baseUrl+url2);    
    };
    
    // this.createAlert = function(alertData){
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + alertData.name;
    //     data = data + ' & Description=' + alertData.description;                      
    //     return GetService.create(this.baseUrl+url,data);    
    // };

    // this.updateAlert = function(alertData){
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + alertData.signInURL;
    //     data = data + ' & host=' + alertData.signOutURL;
    //     data = data + ' & port=' + alertData.password;                         
    //     return GetService.create(this.baseUrl+url,data);    
    // };    

   
} 