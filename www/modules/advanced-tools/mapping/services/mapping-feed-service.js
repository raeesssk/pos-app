
angular
    .module('MappingFeedServices', [])
    .service('MappingFeedService', MappingFeedService);
/**
 * pageTitle - Directive for set Page title - mata title
 */
function MappingFeedService($rootScope, $timeout, $http, GetService) {
    this.baseUrl = "modules";
    var url = "/advanced-tools/mapping/feed.json";

    this.getMappingFeed = function () {
        //Simple GET request example:
        return GetService.get(this.baseUrl + url);
    };

    // this.createMapping = function (groupData) {
    //     //Simple GET request example:
    //     var data = "";
    //     data = data + 'Name=' + groupData.name;
    //     data = data + '&Description=' + groupData.description;

    //     return GetService.create(this.baseUrl + url, data);
    // };


} 