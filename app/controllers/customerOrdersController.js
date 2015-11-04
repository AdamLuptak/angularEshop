//controler for Login
	eshopApp.controller('CustomerOrdersController',['$scope','customersService','$routeParams', function($scope, customersService, $routeParams) {

		var userId = $routeParams.customerID;
		$scope.user = customersService.getCustomer(parseInt(userId));
		console.log($scope.user);
}]);