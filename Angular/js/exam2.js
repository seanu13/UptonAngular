var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope){
	$scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
	$scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
});

app2.controller('badCtrl', function($scope){

	var badFeelings = ["Angry", "Sad", "Gloomy"];

	$scope.bad = badFeelings[Math.floor((Math.random() * badFeelings.length))];
});

app2.controller('goodCtrl', function($scope){

	var goodFeelings = ["Happy", "Excited", "Thrilled", "Not Angry"];

	$scope.good
});