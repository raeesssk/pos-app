angular.module('vxl-mobile', ['ionic']).controller('loginCtrl', function ($scope,$http,$ionicPopup,$rootScope) {
   
    $scope.login = {};
// unitech.3commastechnologies.com
$rootScope.baseURL = 'http://localhost:3000';
  $scope.apiURL = 'http://localhost:3000/oauth/token';  
  // document.getElementById("load").css("display","block");

  $scope.cancel = function()
  {
    $scope.login.username =null;
    // $scope.login.password =null;
  };
  $('#password').hide();
  $('#back').hide();
  $scope.validation = function () {
    if ($scope.login.username === undefined || $scope.login.username === "") {
      $ionicPopup.alert({
         title: 'Error',
         template: 'Please Enter User Name'
      }); return false;
    }
    if($('#next').text() == 'Next'){
      $http({
        method: 'POST',
        url: $rootScope.baseURL+'/login/check',
        data: $scope.login,
        headers: {'Content-Type': 'application/json'}
      })
      .success(function(category)
      {
        if(category.length > 0 && (category[0].username == $scope.login.username)){


        $('#username').attr('readonly','true'); 
        $('#next').text('Login');
        $('#password').show();
        $('#back').show();
        }
        else
        {
          
        }
      })
      .error(function(data) 
      {   
          
   });
 
  }
    if($('#next').text() == 'Login'){

    // $scope.data={
    //   "grant_type":"password", 
    //   "username": $scope.login.username,
    //   "password": $scope.login.password 
    //   }

       $http({
          method: 'POST',
          url: $scope.apiURL,
          data: 'grant_type=password&username='+ encodeURIComponent($scope.login.username) +'&password='+ encodeURIComponent($scope.login.password),
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
                      'Authorization' : 'Basic Y2xpZW50S2V5OmNsaWVudFNlY3JldEtleQ=='}
      })
      .success(function(login)
      {
              localStorage.setItem('pos_admin_access_token', login.access_token);
        // localStorage.setItem("first_name", login.firstName);

        // localStorage.setItem("user", JSON.stringify(login));
         /*  localStorage.setItem("vxl_expires_in", login.expires_in);
         localStorage.setItem("vxl_token_type", login.token_type);
         localStorage.setItem("userName", user.email);*/
        
         window.location.href = '../#/dinein';  

      })
      .error(function(data) 
      {   
        console.log("login error");
         // $scope.setError(data); 
         $ionicPopup.alert({
         title: 'Error',
         template: 'password Does not Matched'
      });             
      });
    }
  };


  //  if (localStorage.getItem("vxl_access_token")) {
  //    $("#load").css("display","block");
  //   // $(".spinner-div").css("display","none");
  //     window.location = 'login.html';
  // }

  $scope.back = function () {
      $('#username').removeAttr('readonly','true'); 
        $('#next').text('Next');
        $('#password').hide();
        $('#back').hide();
  };
 

});