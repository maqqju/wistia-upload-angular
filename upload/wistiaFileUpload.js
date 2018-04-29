function WistiaFileUploadCtrl($scope) {
	$scope.options = {
		url : "https://upload.wistia.com/",
		redirect : window.location.href+"&%s",
	}

	$scope.showEmbed = false;
	$scope.progressing = false;
	$scope.percentageProgress = 0;

	$scope.$watch("$ctrl", function(o, n) {
		if (!n.apiPassword) {
			return;
		}

		$scope.options.url += "?api_password="+n.apiPassword

	}, true);

	$scope.$on("fileuploadadd", function(ev, data) {
		var fileUploadScope = data.scope;
		fileUploadScope.send(data).done(function(data) {
			var embeddedElement = angular.element(document.querySelector(".wistia_embed"));
			embeddedElement.addClass("wistia_async_"+data.hashed_id);
		});
	});

	$scope.$on('fileuploaddone', function (e, data) {
		$scope.showEmbed = true;
		$scope.progressing = false;
	});	

	$scope.$on('fileuploadprogress', function (e, data) {
		$scope.progressing = true;
		$scope.percentageProgress = Math.floor((data._progress.loaded / data._progress.total) * 100);
	});
}

WistiaFileUploadCtrl.$inject = ["$scope"];

angular.module("UploadToWistia").component("wistiaFileUpload", {
	templateUrl : "upload/wistiaFileUpload.html",
	controller : "WistiaFileUploadCtrl",
	bindings : {
		apiPassword : "@"
	}
}).controller("WistiaFileUploadCtrl", WistiaFileUploadCtrl);