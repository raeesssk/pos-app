angular.module('vxl-mobile.menu').controller('adminMenuCtrl',function($rootScope,$scope) {

	 // $scope.loading == "Done";
	 $scope.menu=[
                    {                        
                        "submenu": "Users","link": "/#/app/users","class":"pe pe-7s-user fa-4x text-default","hclass":" button-balanced", "desc":"Manage User and Add the User, View the User and Can List of total User "
                    },
                    {                        
                        "submenu": "Groups", "link": "/#/app/group","class":"pe pe-7s-users fa-4x text-default","hclass":" button-positive", "desc":"Manage Group and Add the Group and View the Group  "
                    },
                    {                        
                        "submenu": "Roles","link": "/#/app/role","class":"pe pe-7s-date fa-4x text-default","hclass":" button-energized","desc":"Manage Role and Add the Role and Set the Permitions"
                    },
                    {                        
                        "submenu": "Alert","link": "/#/app/alert","class":"pe pe-7s-bell fa-4x text-default","hclass":" button-assertive", "desc":"Manage Alert and Add the Alert, View the Alert and Edit the Alert "
                    },
                    {                        
                        "submenu": "Email","link": "/#/app/email","class":"pe pe-7s-mail fa-4x text-default","hclass":" button-balanced","desc":"Manage Email and Add the Mail Server and Set the default and Primary List Data "
                    },
                    {                        
                        "submenu": "Template","link": "/#/app/template","class":"pe pe-7s-photo-gallery fa-4x text-default","hclass":" button-positive", "desc":"Manage Template and Add the Template and view the List of Template "
                    },
                    // {                        
                    //     "submenu": "Back Up","link": "/#/app/backup","class":"pe pe-7s-server fa-4x text-default","hclass":" button-energized", "desc":"Manage Backup and You Can Create a Backup View the Backup and Edit Backup"
                    // },
                    {                        
                        "submenu": "Authentication","link": "/#/app/authentication","class":"pe pe-7s-lock fa-4x text-default","hclass":" button-assertive", "desc":"Manage Authentication and Add the LDAP detail View the LDAP and Edit LDAP detail"
                    },
                    {                        
                        "submenu": "Single Sign On","link": "/#/app/singlesignon","class":"pe pe-7s-key fa-4x text-default","hclass":" button-balanced", "desc":"Manage single Sign On and Add the Detail View the Detail and Can Edit the Detail "
                    },
                    {                        
                        "submenu": "License Management","link": "/#/app/license-management","class":"pe pe-7s-id fa-4x text-default","hclass":" button-energized", "desc":"Manage License Management and View the Detail and Can Edit the Detail "
                    },
                    {                        
                        "submenu": "Setting","link": "/#/app/setting","class":"pe pe-7s-tools fa-4x text-default","hclass":" button-positive", "desc":"Manage single Sign On and Add the Detail View the Detail and Can Edit the Detail "
                    }

                ];

               
});