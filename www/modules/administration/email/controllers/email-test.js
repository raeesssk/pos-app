angular.module('vxl-mobile.email').controller('emailTestCtrl',function($scope) {

    $scope.listArray=[];

   //  $scope.onload = function () {
   //    EmailService.getEmails().then(
   //        function (data)
   //        {
   //          $scope.listArray = data;
   //          console.log($scope.listArray);
   //          $scope.loading='Done';
          
   //        });
   //    };
	  // $scope.onload();

    
    $scope.autoExpand = function(e) {
          var element = typeof e === 'object' ? e.target : document.getElementById(e);
        var scrollHeight = element.scrollHeight -80; // replace 60 by the sum of padding-top and padding-bottom
        element.style.height = scrollHeight +80+ "px";    
    };
  
    function expand() {
      $scope.autoExpand('TextArea');
    }

  

});