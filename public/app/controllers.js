angular.module('AirplanesCtrls', ['AirplanesFactories'])
.controller('AirplanesCtrl', ['$scope', 'AirplanesAPI', function($scope, AirplanesAPI) {
  $scope.airplanes = [];

  // $http({
  //   url: '/api/airplanes',
  //   method: 'GET'
  // }).then(function success(res) {
  //   $scope.airplanes = res.data;
  // }, function error(res) {
  //   console.log(res);
  // });

  AirplanesAPI.query(function success(res) {
    $scope.airplanes = res;
  }, function error(res) {
    console.log(res);
  });
}]);