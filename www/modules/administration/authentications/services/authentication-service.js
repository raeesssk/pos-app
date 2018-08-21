
angular
    .module('AuthenticationServices', [])
    .service('AuthenticationService', AuthenticationService);

function AuthenticationService($rootScope, $timeout, $http, GetService) {
    // this.baseUrl = "modules";
    // var Url = "/administration/authentications/authentication.json";
    var url = "/auth-config";

     this.getLDAP = function () {
        return new Promise(function (resolve, reject) {
            GetService.get(url).then(
                function successCallback(data) {
                    // this callback will be called asynchronously
                    var listArray = [
                        {
                            "data": data,
                            "page": {
                                "sectionTitle": "Email",
                                "state": "email",
                                "title": "Single Sign On List"
                            }
                        }
                    ];

                    resolve(listArray);
                });
        });

    };

    this.createLDAP = function (ldapData) {
        //Simple GET request example:
        var data = {
            "name": ldapData.name,
            "hostname": ldapData.hostname,
            "port": ldapData.port,
            "authorized_user": ldapData.authuser,
            "password": ldapData.password,
            "baseDn": ldapData.basedn,
            "userIdAttr": ldapData.useridattr,
            "connection_timeout": ldapData.connectiontimeout,
            "domain": ldapData.domain,
            "description": ldapData.description
        };
        console.log(data);
        return GetService.create(url, data);

    };

    this.getByLdap = function (id) {
        //Simple GET request example:
        return GetService.getById(url, id);
    };

    this.updateLDAP = function (ldapData) {
        //Simple GET request example:
        var data = {
            "id":ldapData.id,
            "name": ldapData.name,
            "hostname": ldapData.hostname,
            "port": ldapData.port,
            "authorized_user": ldapData.authuser,
            "password": ldapData.password,
            "baseDn": ldapData.basedn,
            "userIdAttr": ldapData.useridattr,
            "connection_timeout": ldapData.connectiontimeout,
            "domain": ldapData.domain,
            "description": ldapData.description
        };
        return GetService.update(url, data);

    };

    this.updateSignOn = function (signOnData) {
        //Simple GET request example:
        var data = "";
        data = data + 'name=' + signOnData.signInURL;
        data = data + '&host=' + signOnData.signOutURL;
        data = data + '&port=' + signOnData.password;
        return GetService.create(this.baseUrl + signonUrl, data);
    };

    this.deleteldap = function (id) {
        return GetService.deleteById(url, id);
    };

} 