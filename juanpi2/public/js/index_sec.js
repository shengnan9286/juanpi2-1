// 首页分页
	var index_seccon = app.controller('index_seccon',['$scope','$http',function($scope,$http){
		$scope.arrName = ['百货','咖啡','好咖啡','女装','日用','服装','鞋靴','凉鞋','卡通','运动户外','美食']
		//发送HTTP请求的
		$scope.num = 1;
		function ajax(){
			$http({
				url:'http://localhost:2046/find' + $scope.num,
				method:'get'
			}).success(function(data){
				console.log(data);
				$scope.arr = data.data.goods;
				// console.log($scope.arr);
			})
		}
		ajax();
		$scope.cl = function () {
			$scope.num = this.$index +1;
			ajax();
		}
	}])