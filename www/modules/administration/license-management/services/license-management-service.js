
angular
    .module('LicenseManagementService', [])
    .service('LicenseManagementService', LicenseManagementService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function LicenseManagementService($rootScope, $timeout, $http, GetService) {
    this.baseUrl = "modules";
    var url = "/administration/license-management/license-management.json";

    this.getLicenseManagement = function () {
        //Simple GET request example:
        return GetService.get(this.baseUrl + url);
    };

    this.getByUsers = function (id) {
        //Simple GET request example:
        return GetService.getById(this.baseUrl + url, id);
    };


    this.createlicenseManagement = function (userData) {
        //Simple GET request example:
        var data = "";
        data = data + 'fName=' + userData.firstname;
        data = data + ' & lName=' + userData.lastname;
        data = data + ' & emailId=' + userData.email;
        data = data + ' & password=' + userData.password;
        data = data + ' & confPassword=' + userData.confirmpassword;
        // data = data + ' & enableUser=' + userData.enableUser;
            return GetService.create(this.baseUrl + url, data);
     };

} 