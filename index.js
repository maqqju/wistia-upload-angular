angular.module("UploadToWistia",
	[
	"blueimp.fileupload",
	"ngRoute",
	"ui.bootstrap.progressbar"
	])
   .config([
   	"$routeProvider", 
   	function($routeProvider) {
   		$routeProvider.when("/test", {
   			templateUrl : "pages/testPage.html",
   			controller : "TestPageCtrl"
   		}).otherwise({
   			redirectTo : "/test"
   		})
   }]);