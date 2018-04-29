angular.module("UploadToWistia").controller("TestPageCtrl", ["$scope", "$routeParams", function($scope, $routeParams) {	
	!$routeParams.apiPassword && console.log("No api password found in query string");
	$scope.apiPassword = $routeParams.apiPassword;
}])