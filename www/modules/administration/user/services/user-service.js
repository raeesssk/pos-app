
angular
    .module('UsersServices', [])
    .service('UsersService', UsersService);

function UsersService($rootScope,GetService) {
     var url = "/aaiadmin/user";
  
    this.getUsers = function () {
       return new Promise(function(resolve, reject) {
        GetService.get(url).then(
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

    this.getByUsers = function (id) {
        //Simple GET request example:
        return GetService.getById(url, id);
    };

     this.createUsers = function (userData) {
        //Simple GET request example:
        console.log(userData);
        var data = {
            "active" : userData.enableuser,
            "email": userData.email,
            "firstName": userData.firstname,
            "lastName": userData.lastname,
            "password": userData.confirmpassword
        };
        console.log(data);
     
        return GetService.create(url, data);
    };

    this.updateUser = function (userData,id) {
       
        //Simple GET request example:
        var data = {
            "id" : id,
            "active" : userData.enableuser,
            "email": userData.email,
            "firstName": userData.firstname,
            "lastName": userData.lastname,
            "password": userData.confirmpassword
        }
        console.log(data);

        return GetService.update(url, data);
    };

    this.deleteUser = function (id) {
       return GetService.deleteById(url, id);
    };

}; 