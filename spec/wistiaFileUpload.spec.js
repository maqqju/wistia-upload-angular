describe("WistiaFileUploadCtrl", function() {
	var _$componentController;
	var scope;

	beforeEach(module("UploadToWistia"));


	beforeEach(inject(function($rootScope, _$componentController_) {
			scope = $rootScope.$new();
	 	   _$componentController = _$componentController_;
	}));

	it("should update the api_key passed as a parameter to the $scope.options", function() {
		var bindings = {apiPassword: "test_key"};
		var ctrlInstance = _$componentController("wistiaFileUpload",{$scope : scope},bindings);
		scope.$digest();
		expect(scope.options.url).toBe("https://upload.wistia.com/?api_password=test_key");
	});

	describe("File Upload Progress", function() {
		it("should update scope percentageProgress", function() {
			var bindings = {apiPassword: "test_key"};
			var ctrlInstance = _$componentController("wistiaFileUpload",{$scope : scope},bindings);
			expect(scope.percentageProgress).toBe(0);
			scope.$broadcast("fileuploadprogress", {_progress : {total : 200, loaded : 60}});
			expect(scope.percentageProgress).toBe(30);
		})

		it("should update scope progressing", function() {
			var bindings = {apiPassword: "test_key"};
			var ctrlInstance = _$componentController("wistiaFileUpload",{$scope : scope},bindings);
			expect(scope.progressing).toBe(false);
			scope.$broadcast("fileuploadprogress", {_progress : {total : 200, loaded : 60}});
			expect(scope.progressing).toBe(true);
		})
	});

	describe("File Upload Done", function() {
		it("should switch on embed and switch off progress", function() {
			var bindings = {apiPassword: "test_key"};
			var ctrlInstance = _$componentController("wistiaFileUpload",{$scope : scope},bindings);
			scope.$broadcast("fileuploadprogress", {_progress : {total : 200, loaded : 60}});
			expect(scope.progressing).toBe(true);
			expect(scope.showEmbed).toBe(false);
			scope.$broadcast("fileuploaddone", {_progress : {total : 200, loaded : 60}});
			expect(scope.progressing).toBe(false);
			expect(scope.showEmbed).toBe(true);
		})
	})

})