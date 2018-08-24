angular.module('vxl-mobile.agent').controller('agentAddCtrl',function($scope,agentService) {

   $scope.agent = {};
   $scope.validate = function()
    {
  		var alpha=/^[a-z A-Z]+$/;
  	
    	 if ($scope.agent.name === " " || $scope.agent.name === undefined) {
          $scope.validateMain($scope.agent.name,"Please Enter Agent Name"); return false; }

    	 if (!($scope.agent.name).match(alpha)) {
            $scope.validateMain($scope.agent.name,"Please Enter Agent Name in Alphabets"); return false;  }

          $scope.addAgentData();
          window.location.href ="/#/app/agent";
   };

    $scope.addAgentData = function () {
       agentService.createAgent($scope.agent).then(
        function (data)
        {
          console.log("after add in post"+data);
      });
   };

    $scope.autoExpand = function(e) {
          var element = typeof e === 'object' ? e.target : document.getElementById(e);
        var scrollHeight = element.scrollHeight -80; // replace 60 by the sum of padding-top and padding-bottom
        element.style.height = scrollHeight +80+ "px";    
    };
  
    function expand() {
      $scope.autoExpand('TextArea');
    }
});