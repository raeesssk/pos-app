
angular
    .module('RoleServices', [])
    .service('RoleService', RoleService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function RoleService($rootScope, $timeout, $http, GetService) {
    this.baseUrl = "modules";
    var url = "/administration/groups/role.json";

    this.getRoles = function () {
        //Simple GET request example:
        return GetService.get(this.baseUrl + url);
    };

    this.getByRoles = function (id) {
        //Simple GET request example:
        return GetService.getById(this.baseUrl + url, id);
    };

    // this.createRoles = function (groupData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + groupData.name;
    //     data = data + ' & Description=' + groupData.description;
    //     return GetService.create(this.baseUrl + url, data);
    // };

    // this.updateRole = function (groupData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + groupData.name;
    //     data = data + ' & Description=' + groupData.description;
    //     return GetService.create(this.baseUrl + url, data);
    // };

} 