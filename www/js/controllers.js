angular.module('starter.controllers', [])

.controller('loginCtrl', function($scope,$http,$location) {
 
 $scope.apiUrl = 'http://localhost:3001';
  $scope.login=function(){
    $http({
          method: 'POST',
          url: $scope.apiURL+"/oauth/token",
          data: 'grant_type=password&username='+ encodeURIComponent($scope.username) +'&password='+ encodeURIComponent($scope.password),
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization' : 'Basic Y2xpZW50S2V5OmNsaWVudFNlY3JldEtleQ=='}
       })
         .success(function(data, status, headers, config)
         {
          if($scope.username == 'admin'){

              $http({
                method: 'POST',
                url: $scope.apiURL+'/login/isonline',
                data: 'username='+$scope.username,
                headers: {'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization' :'Bearer '+data.access_token}
              })
              .success(function(deliverycount)
              { 
                console.log(deliverycount);
              })
              .error(function(data) 
              {   
                console.log(data);
              });
          }
          else{
          }
         })
         .error(function(data, status, headers, config)
         {
            console.log(data);
         });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
