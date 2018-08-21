angular.module('vxl-mobile.mapping').controller('mappingAddMappingCtrl',function($scope) {

    $scope.mapping ={};
    $scope.validate = function()
    {
        window.location.href ="/#/app/mapping-add-summary";
    };

});