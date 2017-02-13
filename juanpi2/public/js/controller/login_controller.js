angular.module('myapp')
.controller("login",['$scope',function($scope){
		$scope.message = ['卷皮账号登','手机快捷登录'];
		$scope.index = 0;
		$scope.placeHolder = ['手机号/邮箱/用户名','密码']
		$scope.login = function(n){
			$scope.index = n;
			if(n==0){
				$scope.placeHolder[0]="手机号/邮箱/用户名";
				$scope.placeHolder[1]='密码'
			}else if(n==1){
				$scope.placeHolder[0]="请输入手机号码";
				$scope.placeHolder[1]='请输入验证码'
			}
		}
		$scope. changeColor= function(c){
			return $scope.index == c? "changeColor":""
		}
}])