// import admin
angular.module('vxl-mobile.kitchen').controller('completedListCtrl', function ($rootScope, $http, $scope, $location,$ionicGesture) {

  $scope.filteredTodos = [];
    $scope.currentPage = 1;
    $scope.maxSize = 5;
    $scope.entryLimit = 5;
    $scope.filterUser = 0;
    $scope.filterUserend = 1;
    $scope.numPerPage = 10;
    $scope.obj_Main = [];
    $scope.completeList = [];
    $scope.productListcount=0;
    $scope.loading1 = 0;
    $scope.limit={};
    $scope.parseInt = parseInt;


   $scope.getAll = function () {

    $scope.completeList = [];
      $http({
        method: 'POST',
        url: $rootScope.baseURL+'/kitchen/complete',
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
      })
      .success(function(category)
      {
        category.forEach(function (value, key) {
        $scope.completeList.push(value);
        
        });
        $scope.loading1 = 1;
        // location.reload();
      })
      .error(function(data) 
      {   
        $scope.loading1 = 1;
        toastr.error('Oops, Something Went Wrong.', 'Error', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });
      });
      
   };
   
   $scope.back = function () {
    window.history.back();
  };
   $rootScope.socket.on('order-complete',function(data){

      
   });

});