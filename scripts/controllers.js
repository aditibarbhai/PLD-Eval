// define your controller and use the GetData service to grab data from the JSON file
// add that data to the scope to make it available to the view
myApp
.controller('MainController', ['$scope', 'GetData', function($scope, GetData) {
	$scope.title = "";
	$scope.subtitle = "";
	$scope.saltLake = {};
	$scope.blog = {};
	$scope.loaded = false;

	GetData.all().success(function(data) {
		$scope.saltLake = data.saltLake;
		$scope.blog = data.blogWidget;
		$scope.title = data.title;
		$scope.subtitle = data.subtitle;
		$scope.loaded = true;
	});
}]);