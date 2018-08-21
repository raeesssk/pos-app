
angular
    .module('LookupServices', [])
    .service('LookupService', LookupService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function LookupService($rootScope, $timeout, $http, GetService) {
    this.baseUrl = "modules";
    var url = "/advanced-tools/lookup/lookup.json";

    this.getLookup = function () {
        //Simple GET request example:
        return GetService.get(this.baseUrl + url);
    };

    this.getByLookup = function (id) {
        //Simple GET request example:
        return GetService.getById(this.baseUrl + url, id);
    };

    // this.createLookup = function (groupData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + groupData.name;
    //     data = data + '&Description=' + groupData.description;

    //     return GetService.create(this.baseUrl + url, data);
    // };

    //   this.createLookupField = function (lookData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'SourceField = ' + lookData.sourceField;
    //     data = data + ' &TargetField = ' + lookData.targetField;
    //     return GetService.create(this.baseUrl + url, data);
    // };


    // this.updateLookup = function (groupData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + groupData.name;
    //     data = data + ' & Description=' + groupData.description;
    //     return GetService.create(this.baseUrl + url, data);
    // };

    //  this.saveLookup = function (lookup) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + lookup.name;
    //     data = data + ' & Description=' + lookup.description;
    //     data = data + ' & sub=' + lookup.sub;
    //     data = data + ' & mappingname=' + lookup.mappingname;
    //     data = data + ' & source=' + lookup.source;
    //     data = data + ' & target=' + lookup.target;
    //     return GetService.create(this.baseUrl + url, data);
    // };

} 