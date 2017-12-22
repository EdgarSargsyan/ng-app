var top_data_module = angular.module('App', []);

top_data_module.controller('TodoCtrl', function($scope, $http) {
  $http.get('https://api.coinmarketcap.com/v1/global/')
       .then(function(res){
          $scope.top_data = res.data;                
        });
});