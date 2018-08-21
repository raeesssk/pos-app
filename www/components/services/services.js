/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */
 angular
 .module('GetServices', [])
 .service('GetService', GetService);
 

 function GetService($rootScope, $timeout, $http) {
    this.baseUrl = "https://m.appanalytix.com/api/v1";
    this.getMethod = "GET";
    this.postMethod = "POST";
    this.putMethod = "PUT";
    this.deleteMethod = "DELETE";

    this.get = function (url) {
        //Simple GET request example:
        return $http({
            url: this.baseUrl + url,
             method: this.getMethod,
            headers: $rootScope.headerConfig
        })
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                return response.data;
            });
    };

    this.getById = function (url, id) {
        //Simple GET request example:

        return $http({
            url: this.baseUrl + url + "/" +id,
            method: this.getMethod,
            headers: $rootScope.headerConfig
        })
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                return response.data;
            });
    };

    this.create = function (url, data) {
        //Simple CREATE request example:
        return $http({
            url: this.baseUrl + url,
            method: this.postMethod,
            headers: $rootScope.headerConfig,
            data: data
        })
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                return response.data;
            });
    };

    this.update = function (url, data) {
         return $http({
            url: this.baseUrl + url,
            method: this.putMethod,
            headers: $rootScope.headerConfig,
            data: data
        })
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                return response.data;
            });
    };

        this.updateById = function (url, data, id) {
         return $http({
            url: this.baseUrl + url + "/" + id,
            method: this.putMethod,
            headers: $rootScope.headerConfig,
            data: data
        })
        .then(function successCallback(response, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                return response;
                console.log(response);
            }, function errorCallback(response, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                return response;
            });
    };

    this.deleteById = function (url, id) {
        //Simple GET request example:

        return $http({
            url: this.baseUrl + url + "/" +id,
            method: this.deleteMethod,
            headers: $rootScope.headerConfig
          
        })
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                return response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                return response.data;
            });
    };
} 