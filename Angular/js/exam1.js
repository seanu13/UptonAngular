var app1 = angular.module('exam1', []); //comes from ng-app parameter in HTML doc

app1.controller('ctrl1', function($scope){
	//automatically pass in the $scope object when the function is called.
	//example of dependency injection

	$scope.first = 1;
	$scope.second = 1;

	$scope.updateValue = function(){
		$scope.calculation = $scope.first + ' + ' + $scope.second + ' = ' + (+$scope.first + +$scope.second);
		//+ before $scope.first converts from a string to an int as a shortcut
	};
});