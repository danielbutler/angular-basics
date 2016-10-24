angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This is the helloWorld controller function, in the mainCtrl!");
  };
})

.controller('coolCtrl', function($scope) {
  $scope.whoAmI = function() {
    console.log("hellow there, this is the coolCtrl function!");
  }
});
