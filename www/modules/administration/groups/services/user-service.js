
angular
    .module('UserServices', [])
    .service('UserService', UserService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function UserService($rootScope, $timeout, $http, GetService) {
    this.baseUrl = "modules";
    var url = "/administration/groups/user.json";
    // var url2 = "/administration/groups/groupusernfoadd.json";

    this.getUser = function () {
        //Simple GET request example:
        return GetService.get(this.baseUrl + url);
    };

     this.getUserdata = function () {
        //Simple GET request example:
        return GetService.get(this.baseUrl + url);
    };


    // this.getUserAdd = function () {
    //     //Simple GET request example:
    //     return GetService.get(this.baseUrl + url2);
    // };

    // this.getByGroups = function (id) {
    //     //Simple GET request example:
    //     return GetService.getById(this.baseUrl + url, id);
    // };

    // this.createGroups = function (groupData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + groupData.name;
    //     data = data + ' & Description=' + groupData.description;
    //     return GetService.create(this.baseUrl + url, data);
    // };

    // this.updateGroups = function (groupData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + groupData.name;
    //     data = data + ' & Description=' + groupData.description;
    //     return GetService.create(this.baseUrl + url, data);
    // };

 
} 