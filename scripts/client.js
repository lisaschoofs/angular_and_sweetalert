

var myApp = angular.module('myApp', []);

myApp.controller('OneController', [function(){
  console.log('OneController loaded!');
  swal('Good job!', 'Sweet Alert is set up!', 'success');
}]);

// swal("Hello world!");
