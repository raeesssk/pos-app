
angular
    .module('UserServices', [])
    .service('BackupService', BackupService);

function BackupService($rootScope, $timeout, $http, GetService) {
    this.baseUrl = "modules";
    var url = "/administration/backup/backup.json";

    this.getBackup = function () {
        return GetService.get(this.baseUrl + url);
    };

    this.createBackup = function (backupData) {
        var data = "";
        data = data + 'name=' + backupData.name;
        data = data + ' & numberOfDays=' + backupData.noofdays;
        data = data + ' & description=' + backupData.description;
       return GetService.create(this.baseUrl + url, data);
    };

    this.updateBackup = function (backupData) {
        var data = "";
        data = data + 'name=' + backupData.name;
        data = data + ' & numberOfDays=' + backupData.noofdays;
        data = data + ' & description=' + backupData.description;
       return GetService.create(this.baseUrl + url, data);
    };


} 