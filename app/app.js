var test2 = 'tank';
var eshopApp = angular.module('eshop',['ngRoute','ngResource']).run(function($rootScope) {
    $rootScope.test = '1';
});



//routes privider
eshopApp.config(function($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl: 'view/login.html',
		controller: 'LoginController'
	})

	.when('/customers/:navBarChosser',{

		templateUrl: 'view/customers.html',
		controller: 'CustomersController'
	})

	.when('/customerOrders/:customerID',{

		templateUrl: 'view/customerOrders.html',
		controller: 'CustomerOrdersController'
	})

	.when('/orders/:navBarChosser',{

		templateUrl: 'view/orders.html',
		controller: 'OrdersController'
	})

});

