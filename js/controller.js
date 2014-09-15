var app = angular.module('fhl',['ngRoute']);
app.config(['$routeProvider',function ($routeProvider){
$routeProvider
.when('/',
	{
	 controller:'fhlcontroller',
	 templateUrl:'views/login.html'
	 
	})
	.when('/home',
	{
	 controller:'fhlcontroller',
	 templateUrl:'views/home.html'
	})
	.when('/update:id*',
	{
	 controller:'fhlcontroller',
	 templateUrl:'views/update.html'
	})
	.otherwise({redirectTo:'/'});
}]);


app.controller('fhlcontroller', function($scope, $http,$routeParams,$location) {
$scope.selecteddata={
    NAME: "",
    ATC: "",
    TIER: "",
    DESIGINATION: "",
    VISATYPE: "",
    CORESKILLS: "",
    SEGMENT: "",
    DOMAIN: "",
	STATUS:"",
    ACTIVITY: ""
    };
	
	
	
	$http({method: 'JSONP', url: 'http://infinite-island-7719.herokuapp.com/search?callback=JSON_CALLBACK&id='+$routeParams.id}).
					success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					
					
					 $scope.selecteddata=data[0];
					}).
					error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					
					alert("Unable to connect the sever");
					
					});
	
	
	
	
	$scope.updateForm = function() {
        console.log("updateing data....");
		var params=$.param($scope.selecteddata);
		
		$http({method: 'JSONP', url: 'http://infinite-island-7719.herokuapp.com/update?callback=JSON_CALLBACK&'+params}).
					success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					if(data[0].status=="done")
					{
					alert("Successfully updated.");
					
					//$scope.getManualRefresh($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);
					}
					else
					alert("Failed to update the data. Try Again.");
					
					}).
					error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					alert("Failed to update the data.");
					});
					
    };
	
	
	$scope.login=function(){
	
	$location.path('/home');
	};
	
	

});