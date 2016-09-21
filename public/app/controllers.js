angular.module('AirplanesCtrls', [])
.controller('AirplanesCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.airplanes = [];

  $http({
    url: '/api/airplanes',
    method: 'GET'
  }).then(function success(res) {
    $scope.airplanes = res.data;
  }, function error(res) {
    console.log(res);
  });
}]);