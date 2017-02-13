angular.module('myapp')
.controller("mine",['$scope',function($scope){
	$scope.close = false;
	$scope.openFn=function(){
		$scope.close = true;	
	};
	$scope.closeFn=function(){
		$scope.close = false;
	}	
}])