//首页angular
	var indexController = app.controller('indexcon',['$scope','$http',function($scope,$http){
		$http({
			url:'http://localhost:2046/1',
			method:'get'
		}).success(function(data){
			// console.log(data);
			$scope.arr = data.new;
			// console.log($scope.arr)
		})
		// 点击女装按钮
		$scope.cl2 = function(){
			$scope.arr = '';
			$http({
			url:'http://localhost:2046/1',
				method:'get'
			}).success(function(data){
				// console.log(data);
				$scope.arr = data.woman;
			})
		}
		$scope.cl1 = function(){
			$scope.arr = '';
			$http({
			url:'http://localhost:2046/1',
				method:'get'
			}).success(function(data){
				// console.log(data);
				$scope.arr = data.new;
			})
		}
		//swiper
		var mySwiper = new Swiper('.swiper-container',{
						pagination : '.swiper-pagination',
						autoplay: 1000,
						loop:true,
						//pagination : '#swiper-pagination1',
						autoplayDisableOnInteraction : false,
				        observer:true,
				        observeParents:true,
				        paginationClickable :true,
		})
	}])


