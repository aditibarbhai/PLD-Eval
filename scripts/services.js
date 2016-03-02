myApp
.factory('GetData', function($http) {
	// create a service to get the JSON data and make it available to the controller
	return {
		all : function() {
			return $http({
				method: 'GET', 
				url: 'scripts/data.json'
			});
		}
	}
});