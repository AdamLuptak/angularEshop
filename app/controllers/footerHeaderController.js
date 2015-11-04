//controler for Login
eshopApp.service('UserService', function() {
	this.page = '0';

	this.setPage = function(page){
		this.page = page;
	};
	this.getPage= function(){
		return this.page;
	};
});var myModule = angular.module('myModule', []);
myModule.factory('mySharedService', function($rootScope) {
    var sharedService = {};
    
    sharedService.message = '';

    sharedService.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});

function ControllerZero($scope, sharedService) {
    $scope.handleClick = function(msg) {
        sharedService.prepForBroadcast(msg);
    };
        
    $scope.$on('handleBroadcast', function() {
        $scope.message = sharedService.message;
    });        
}

function ControllerOne($scope, sharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'ONE: ' + sharedService.message;
    });        
}

function ControllerTwo($scope, sharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'TWO: ' + sharedService.message;
    });
}

ControllerZero.$inject = ['$scope', 'mySharedService'];        
        
ControllerOne.$inject = ['$scope', 'mySharedService'];

ControllerTwo.$inject = ['$scope', 'mySharedService'];


eshopApp.factory('mySharedService', function($rootScope) {
    var sharedService = {};
    
    sharedService.message = '';

    sharedService.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});



	eshopApp.controller('FooterHeaderController',['$scope', '$routeParams','customersService','UserService','$rootScope',function($scope,$routeParams,customersService,UserService,$rootScope) {
		//UserService.setPage('1');
		$scope.page=UserService.getPage();
		$scope.navBarChosser = $rootScope.test;
		
		$scope.footerShow = 'true';
		$scope.footer = function(){
			return 1;
		}
		console.log( "sdsd"+ $scope.navBarChosser );

 $scope.change = function() {
        $scope.test = new Date();
    };

    $scope.getOrig = function() {
        return $rootScope.test;
    };


}]);

