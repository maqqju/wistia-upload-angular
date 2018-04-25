angular.module("UploadToWistia").component("wistiaFileUpload", {
	templateUrl : "upload/wistiaFileUpload.html",
	controller : "WistiaFileUploadCtrl"
}).controller("WistiaFileUploadCtrl", ["$scope","$element", function($scope, $element) {
	$scope.options = {
		url : "https://upload.wistia.com/"
	}
}]);