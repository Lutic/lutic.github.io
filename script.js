/**
 * Created by Elnara_Mikailova on 4/12/2016.
 */
var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function($scope) {
  $scope.products = ["Milk", "Bread", "Cheese"];
});