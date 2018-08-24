 angular.module('vxl-mobile.order').controller('orderTotalCtrl', function ($rootScope, $http,$state,$stateParams,$scope, $location,$filter,$ionicModal) {
 	  $scope.tableList=[];
 	
    $scope.tableObj = JSON.parse(localStorage.getItem("tableObj"));
    $scope.orderObj = JSON.parse(localStorage.getItem("orderObj"));
 	  $scope.printList=[];
    $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
    
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  }; 
// $scope.closeModal();
 	$scope.getAll = function () {
        
     
    $scope.tableList = [];
      $http({
          method: 'GET',
          url: $rootScope.baseURL+'/table',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
        })
        .success(function(category)
        {
          category.forEach(function (value, key) {

                  $scope.tableList.push(value);
              });
          $scope.loading1=1;

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
    $scope.getid = function (index) {
      // $("#"+id).removeClass('color');
      // $("#"+id).addClass('btn-success');
            $scope.printList=[];
            $scope.orderObj.total_amount = 0; 
              $http({
                  method: 'GET',
                  url: $rootScope.baseURL+'/order/ongoin/orders/'+$scope.tableList[index].tm_id,
                  headers: {'Content-Type': 'application/json',
                            'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
                })
                .success(function(category1) {
                    category1.forEach(function (value, key) {
                    value.opm_quantity_old = value.opm_quantity;
                    $scope.orderObj.total_amount = parseFloat(parseFloat($scope.orderObj.total_amount) + parseFloat(value.opm_total));
                    $scope.printList.push(value);
                    });
                      $scope.openModal();
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
        $rootScope.socket.on('booktable',function(data){
              $scope.getAll();
          });
 });
