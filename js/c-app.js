var app = angular.module('landing', []);
	

	app.controller('productosCtrl', function($scope, $http) {
		$http.get("../landingEmanager/php/getproductos.php")
		.success(function (response) {$scope.productos = response.productos;});
	});