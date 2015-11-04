//controler for customerControler
    eshopApp.controller('CustomersController',['$scope', 'customersService','$routeParams','UserService','$rootScope',function($scope, customersService,$routeParams,UserService,$rootScope) {
   //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }
    UserService.setPage('3');
    $rootScope.test = 2;
    console.log(UserService.getPage());
    $scope.navBarChosser = $routeParams.navBarChosser;
    

    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };

}]);