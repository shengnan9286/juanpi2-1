	//home页angular
	// 过滤器

	var indexController = app.controller('homecon',['$scope','$http',function($scope,$http){
		// $http({
		// 	url:'http://localhost:2046/2',
		// 	method:'get'
		// }).success(function(data){
		// 	console.log(data);
		// 	$scope.arr = data.data.goods;
		// 	// console.log($scope.arr)
		// })
		$scope.cl1 = function(){
			isShow.style.display = 'block';
			$scope.arr = '';
			$http({
				url:'http://localhost:2046/2',
				method:'get'
			}).success(function(data){
				$scope.arr = data.data.goods;
				// console.log($scope.arr);
			})
		}
		$scope.cl2 = function(){
			$scope.arr = '';
			isShow.style.display = 'none';
			$http({
				url:'http://localhost:2046/2',
				method:'get'
			}).success(function(data){
				$scope.arr = data.baihuo;
				// console.log($scope.arr);
			})
		}
		$scope.cl3 = function(){
			$scope.arr = '';
			isShow.style.display = 'none';
			$http({
				url:'http://localhost:2046/2',
				method:'get'
			}).success(function(data){
				$scope.arr = data.chufang;
				// console.log($scope.arr);
			})

		}
		$scope.cl4 = function(){
			isShow.style.display = 'none';
			$scope.arr = '';
			// $scope.try = n;
			// console.log($scope.try)
			$http({
				url:'http://localhost:2046/2',
				method:'get'
			}).success(function(data){		
				$scope.arr = data.qingjie;
				//console.log($scope.arr);
			})
		}
		$scope.cl5 = function(){
			isShow.style.display = 'none';
			$scope.arr = '';
			$http({
				url:'http://localhost:2046/2',
				method:'get'
			}).success(function(data){		
				$scope.arr = data.weiyu;
			})
		}
		//swiper
		$http({
				url:'http://localhost:2046/2',
				method:'get'
			}).success(function(data){		
				$scope.arrSlider = data.data.slide_ads.config.slide;
			})
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