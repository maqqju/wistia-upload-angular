angular.module("UploadToWistia").component("wistiaFileUpload", {
	templateUrl : "upload/wistiaFileUpload.html",
	controller : "WistiaFileUploadCtrl",
	bindings : {
		apiPassword : "@"		
	}
}).controller("WistiaFileUploadCtrl", ["$scope","$element", function($scope, $element) {
	$scope.options = {
		url : "https://upload.wistia.com/",
		singleFileUploads : true,
		postMessage : true,
		headers : {
			"Content-Type" :"multipart/form-data"
		}
	}

	$scope.$watch("$ctrl", function(o, n) {
		if (!n.apiPassword) {
			return;
		}

		$scope.options.formData = {
			api_password : n.apiPassword
		};

	}, true);

	var fileUploadScope = null;
	var file = null;

	$scope.$on("fileuploadadd", function(ev, data) {
		fileUploadScope = data.scope;
		file = data.files;

		fileUploadScope.send(data);
	});
}]);