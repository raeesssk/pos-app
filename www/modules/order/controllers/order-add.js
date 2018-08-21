 // import admin
 angular.module('vxl-mobile.order').controller('orderAddCtrl', function ($rootScope, $http, $scope, $location,$filter,$ionicModal) {

    $scope.tableObj = JSON.parse(localStorage.getItem("tableObj"));
    $scope.orderObj = JSON.parse(localStorage.getItem("orderObj"));
    $scope.pro=0;
    $scope.tab=0;
    $scope.categoryList = [];
    $scope.productList = [];
    $scope.tableList = [];
    $scope.itemList = [];
    $scope.om_add=0;  
    $scope.orderObj.om_total=0;
    $scope.printList=[];
    $scope.search={};
    // $scope.orderObj.where='dinein';

// console.log($scope.tableObj);
// localStorage.setItem("tableObj");
// localStorage["tablesList"]=JSON.stringify($scope.tableObj);

  // Main function

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

  $scope.showCategory=function(){
    $scope.pro=0;
  };

  $scope.getAll = function () {
        
      $http({
        method: 'GET',
        url: $rootScope.baseURL+'/category',
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
      })
      .success(function(category)
      {
          category.forEach(function (value, key) {
            $scope.categoryList.push(value);
          });
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

  // After place Order tableList
  $scope.getPrintDetails = function () {
      $scope.printList = [];
      $scope.orderObj.total_amount = 0;  
        $http({
          method: 'POST',
          url: $rootScope.baseURL+'/order/ongoing/orders',
          data: $scope.orderObj,
          headers: {'Content-Type': 'application/json',
                    'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
        })
        .success(function(category)
        {
          category.forEach(function (value, key) {
            value.opm_quantity_old = value.opm_quantity;
            $scope.orderObj.total_amount = parseFloat(parseFloat($scope.orderObj.total_amount) + parseFloat(value.opm_total));
            $scope.printList.push(value);
            });
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

// ### Cancel Reservation in Modal
  $scope.deleteTable=function(table){
      $http({
        method: 'post',
        url: $rootScope.baseURL+'/order/product/remove',
        data: $scope.orderObj,
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
      })
      .success(function(category) {
        if($(category.length == 0)){
            $http({
              method: 'post',
              url: $rootScope.baseURL+'/table/notreserved',
              data: table,
              headers: {'Content-Type': 'application/json',
                        'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
            })
            .success(function(category) {
              if (category.length > 0) {
                $('#'+table.tm_id).removeClass('btn-success');
                $("#"+table.tm_id).addClass('color');
                $('#confirm-change').modal('hide');
                // $('#confirm-change').modal('hide');
                $scope.closeModal();
                $location.path('#/app/dinein')
              }
            })
            .error(function(data){   
              $scope.loading1 = 1; 
              toastr.error('Oops, Something Went Wrong.', 'Error', {
                closeButton: true,
                progressBar: true,
                positionClass: "toast-top-center",
                timeOut: "500",
                extendedTimeOut: "500",
              });         
            });
        }

        $rootScope.socket.emit('remove-reserve',{
          obj:category[0]
        });
      })
      .error(function(data) 
        {   
          $scope.loading1 = 1;
          /*error pop-up*/          
        });
  };


// ### Change Reservation in Modal
  $scope.changeTable=function(table){
    $('#del').attr("disabled","true");
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
          $scope.tab=1;
          $rootScope.socket.emit('changeTable',{
          obj:category[0]
        }); 
      })
      .error(function(data) 
      {   
             toastr.error('Oops, Something Went Wrong.', 'Error', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });     
      });

  };

  $scope.getid = function (table) {
      // $("#"+id).removeClass('color');
      // $("#"+id).addClass('btn-success');
    if ($("#"+table.tm_id).hasClass('color')){
        $http({
            method: 'post',
            url: $rootScope.baseURL+'/table/isreserved',
            data: table,
            headers: {'Content-Type': 'application/json',
                      'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
          })
          .success(function(category) {
            
              if (category.length > 0) {

                $http({
                  method: 'post',
                  url: $rootScope.baseURL+'/order/edit/'+$scope.orderObj.om_id,
                  data: table,
                  headers: {'Content-Type': 'application/json',
                            'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
                })
                .success(function(category1) {
                  
                    $http({
                        method: 'post',
                        url: $rootScope.baseURL+'/table/notreserved/',
                        data: $scope.tableObj,
                        headers: {'Content-Type': 'application/json',
                                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
                    })
                      .success(function(category2) {
                        
                          $("#"+table.tm_id).removeClass('button-balanced');
                          $("#"+table.tm_id).addClass('button-stable');
                          $("#"+$scope.tableObj.tm_id).removeClass('button-stable');
                          $("#"+$scope.tableObj.tm_id).addClass('button-balanced');

                          localStorage.setItem('tableObj',JSON.stringify(table) );
                          $scope.tableObj = JSON.parse(localStorage.getItem("tableObj"));
                          $scope.tab=0;
                          $('#del').removeAttr("disabled");
                          $('#confirm-change').modal('hide');
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
              }
              
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
      }
    };

    $scope.getSearch=function(){
      $scope.search.item="";
    };

    $scope.getPro=function(product){
      
      $scope.productList=[];

      $http({
        method: 'POST',
        url: $rootScope.baseURL+'/product/items',
        data: product,
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
      })
      .success(function(category)
      {
      $('#stop').attr("disabled","true");
        category.forEach(function (value, key) {
          value.quantity = 1;
          $scope.productList.push(value);
        });
        $scope.pro=1;
      })
      .error(function(data) 
      {   
          toastr.error('Oops, Something Went Wrong.', 'Error', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });          
      });
        
      };

    $scope.addOrder = function (product){ 
         var flag = 0;
      $('#stop').removeAttr("disabled");
        if ($scope.itemList.length == 0) 
        {
          $scope.itemList.push(product);
          product.total = product.pm_rate * product.quantity;
          $scope.orderObj.om_total = parseFloat($scope.orderObj.om_total + product.pm_rate);
        }
        else{
          $scope.itemList.forEach(function (value, key) {
            if (value.pm_id == product.pm_id) 
              {
                value.quantity++;
                value.total = value.pm_rate * value.quantity;
                $scope.orderObj.om_total = parseFloat($scope.orderObj.om_total + value.pm_rate);;
                flag=1;
              }
          });
            if (flag==0)
              {
                product.total = product.pm_rate * product.quantity;
                $scope.orderObj.om_total =  parseFloat($scope.orderObj.om_total + product.pm_rate);
                $scope.itemList.push(product);
              }
        }
      };

    $scope.om_min = function (index){
        if($scope.itemList[index].quantity == 1){
          $scope.itemList[index].total = $scope.itemList[index].pm_rate * $scope.itemList[index].quantity;
          $scope.orderObj.om_total = parseFloat($scope.orderObj.om_total - $scope.itemList[index].pm_rate);
          $scope.itemList.splice(index, 1);
        }
        else
        {
          $scope.itemList[index].quantity--;
          $scope.itemList[index].total = $scope.itemList[index].pm_rate * $scope.itemList[index].quantity;
          $scope.orderObj.om_total = parseFloat($scope.orderObj.om_total - $scope.itemList[index].pm_rate);
          // $scope.itemList = value.pm_rate * value.quantity;
        }
      };

    $scope.orderchange = function(){
        $scope.orderObj.total_amount = 0;
        $scope.printList.forEach(function (value, key) {
          $scope.orderObj.total_amount = parseFloat($scope.orderObj.total_amount + (value.opm_quantity * value.opm_rate));
        });
    };

    $scope.om_update = function(index){
      $scope.updateList={
        list:$scope.printList[index], 
        total:$scope.orderObj.total_amount
      };
      $http({
        method: 'POST',
        url: $rootScope.baseURL+'/order/product/update',
        data: $scope.updateList,
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
      })
      .success(function(category)
      { 
        toastr.success('Order Placed', 'Success', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });
        $scope.getPrintDetails();
      })
      .error(function(data) 
      {   
          toastr.error('Oops, Something Went Wrong.', 'Error', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });         
      });
    };

    $scope.om_status = function(index){
      $scope.cancelList={
        list:$scope.printList[index], 
        total:$scope.orderObj.total_amount
      };
       $http({
        method: 'POST',
        url: $rootScope.baseURL+'/order/product/cancel',
        data: $scope.cancelList,
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
      })
      .success(function(category)
      { 
        toastr.success('Order Placed', 'Success', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });
        $scope.getPrintDetails();
      })
      .error(function(data) 
      {   
          toastr.error('Oops, Something Went Wrong.', 'Error', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });          
      });
    };

    $scope.orderConfirm = function(){
      
      $scope.objList={
        list:$scope.itemList, 
        obj:$scope.orderObj
      };
      // console.log($scope.objList.obj);
      $http({
        method: 'POST',
        url: $rootScope.baseURL+'/order/placeorder',
        data: $scope.objList,
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
      })
      .success(function(category)
      {
        toastr.success('Order Placed', 'Success', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });    /*
          window.location.href = '#/kitchen/pending'; */
        
          $rootScope.socket.emit('orderPlace',{
            obj:category[0]
          });
      })
      .error(function(data) 
      {   
          toastr.error('Oops, Something Went Wrong.', 'Error', {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-top-center",
            timeOut: "500",
            extendedTimeOut: "500",
          });         
      });
    };

      /*socket.on('orderPlace',function(data){

        });*/
});