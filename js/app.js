// This needs to be sourced into index.html/
// The angular app is defined in this file using the module method. 

var myApp = angular.module('myApp', []);

//Now, the controller for the application can be created.
//The controller is called RegistrationController.
//$scope represents the variables that are available to the application based on where myApp is defined. 
myApp.controller('RegistrationController', ['$scope', function ($scope) {
  //this is where code that manages the application goes. 
  /*This function has been created inside the application scope.  That means that any variable inside the application has access to the register function. 
  In turn, the function creates a new variable, $scope.message that has the value of $scope.user.firstname. */ 
    $scope.register = function(){
      $scope.message = "Welcome, " +  $scope.user.firstname;
    };

}]);