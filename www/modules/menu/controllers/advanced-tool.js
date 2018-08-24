angular.module('vxl-mobile.menu').controller('advanceToolMenuCtrl',function($rootScope,$scope) {


	 $scope.menu=[{
                        "submenu": "Agent",
                        "link": "/#/app/agent",
                        "class": "pe pe-7s-portfolio fa-4x text-default",
                        "hclass": "button-balanced",
                        "desc": "Manage Agent and Add the Agent View the Agent and Can Edit the Agent Detail"
                    }, {
                        "submenu": "Connector",
                        "link": "/#/app/connector",
                        "class": "pe pe-7s-server fa-4x text-default",
                        "hclass": "button-positive",
                        "desc": "Add the Connector View the Select Connector and Can Edit the Connector Detail"
                    }, {
                        "submenu": "Mapping",
                        "link": "/#/app/mapping",
                        "class": "pe pe-7s-map fa-4x text-default",
                        "hclass": "button-energized",
                        "desc": "Add the Mapping and Select Subject Area and Can View and Edit the Mapping"
                    }, {
                        "submenu": "Incoming Web Hooks",
                        "link": "#",
                        "class": "pe pe-7s-pin fa-4x text-default",
                        "hclass": "button-assertive",
                        "desc": "Manage Income Web Hook and Add the Detail of Income Web Hook View and Edit"
                    }, {
                        "submenu": "Look up",
                        "link": "/#/app/lookup",
                        "class": "pe-7s-glasses fa-4x text-default",
                        "hclass": "button-balanced",
                        "desc": "Manage Lookup and Add the Lookup View the Lookup and Can Edit the Lookup Detail"
                    }, {
                        "submenu": "Integration",
                        "link": "/#/app/integration",
                        "class": "pe pe-7s-date fa-4x text-default",
                        "hclass": "button-positive",
                        "desc": "Manage Integration and Add the Integration View the Integration"
                    }];

                    // $scope.loading == "Done";
});