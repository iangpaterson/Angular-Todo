	.controller('LoginController', function($scope, UserAPIService, store) {
		$scope.loginUser = {};
		var URL = "https://morning-castle-91468.herokuapp.com/";

		$scope.authToken = store.get('authToken');
		$scope.username = store.get('username');

		
	})