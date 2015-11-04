//controler for Login
	eshopApp.controller('OrdersController',['$scope', '$routeParams','customersService',function($scope,$routeParams,customersService) {
		$scope.navBarChosser = $routeParams.navBarChosser;
		$scope.customers = customersService.getCustomers();
		console.log($scope.customers);
}]);