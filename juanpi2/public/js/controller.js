//路由
	var app = angular.module('myapp',['ngRoute']);
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/',{templateUrl:'html/indexDetail.html',controller:'indexcon'})
		.when('/home',{templateUrl:'html/home.html',controller:'homecon'})
		.when('/global',{templateUrl:'html/global.html'})
		.when('/shopcar',{templateUrl:'html/shopcar.html'})
		.when('/mine',{templateUrl:'html/mine.html'})
		.when('/index_sec',{templateUrl:'html/index_sec.html',controller:'index_seccon'})
		.otherwise({redirectTo:'/'});
	}]);