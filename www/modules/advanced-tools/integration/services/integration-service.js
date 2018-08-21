

angular
    .module('IntegrationServices', [])
    .service('IntegrationService', IntegrationService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function IntegrationService($rootScope, $timeout, $http, GetService) {
    this.baseUrl = "modules";
    var url = "/advanced-tools/integration/integration.json";

    this.getIntegration = function () {
        //Simple GET request example:
        return GetService.get(this.baseUrl + url);
    };

    // this.createIntegration = function (integrationData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + integrationData.name;
    //     data = data + '&Description=' + integrationData.description;

    //     return GetService.create(this.baseUrl + url, data);
    // };

 
} 