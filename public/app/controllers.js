angular.module('AirplanesCtrls', ['AirplanesFactories'])
.controller('AirplanesCtrl', ['$scope', 'AirplanesAPI', function($scope, AirplanesAPI) {
  $scope.airplanes = [];

  AirplanesAPI.query(function success(res) {
    $scope.airplanes = res;
  }, function error(res) {
    console.log(res);
  });
}])
.controller('AirplaneShowCtrl', ['$scope', 'AirplanesAPI', '$stateParams', function($scope, AirplanesAPI, $stateParams) {
  $scope.airplane = {};

  AirplanesAPI.get({id: $stateParams.id}, function success(res) {
    $scope.airplane = res;
  }, function error(res) {
    console.log(res);
  });
}]);

//If wanted, here is how the $http req would look:
  // $http({
  //   url: '/api/airplanes',
  //   method: 'GET'
  // }).then(function success(res) {
  //   $scope.airplanes = res.data;
  // }, function error(res) {
  //   console.log(res);
  // });