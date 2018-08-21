angular.module('vxl-mobile.dinein').controller('dineinCtrl',function($rootScope,$scope,$http,$location) {

	 $scope.loading1=0;
    $scope.tableList = [];
    // $scope.opmId = $routeParams.opmId;
    // $scope.isreserved = 0;
    // var socket = io.connect($rootScope.baseURL);
    
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
                    
        });
    };
    $scope.getAll();

    


    $scope.getid = function (table) {
        // $("#"+id).removeClass('color');
        // $("#"+id).addClass('btn-success');
        
    table.om_where = "dinein";
    if ($("#"+table.tm_id).hasClass('button-default')){
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
                          url: $rootScope.baseURL+'/order/add',
                        data: table,
                          headers: {'Content-Type': 'application/json',
                                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
                        })
                        .success(function(category) {
                            
                                $("#"+table.tm_id).removeClass('button-default');
                                $("#"+table.tm_id).addClass('button-positive');

                                localStorage.setItem('orderObj',JSON.stringify(category[0]) );
                                localStorage.setItem('tableObj',JSON.stringify(table) );
                                $location.path('#/app/order/add');
                                
                                
                        })
                        .error(function(data) 
                        {   
                              $scope.loading1 = 1;
                                    
                        });
                        $rootScope.socket.emit('booktable',{
                          obj:category[0]
                        });
                    }
                })
                .error(function(data) 
                {   
                      $scope.loading1 = 1;
                           
                });
        }
        else{

            /*$http({
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
                  });          
                });*/   
                    
                    $http({
                          method: 'post',
                          url: $rootScope.baseURL+'/order/check',
                          data: table,
                          headers: {'Content-Type': 'application/json',
                                  'Authorization' :'Bearer '+localStorage.getItem("pos_admin_access_token")}
                        })
                        .success(function(category) {
                            
                                localStorage.setItem('tableObj', JSON.stringify(table) );
                                localStorage.setItem('orderObj',JSON.stringify(category[0]) );
                                window.location.href = '#/app/order/add';
                        })
                        .error(function(data) 
                        {   
                            $scope.loading1 = 1;      
                    });
            }

        };
      $rootScope.socket.on('remove-reserve',function(data){
        $scope.getAll();
      });
      $rootScope.socket.on('changeTable',function(data){
        $scope.getAll();
      });
               
});