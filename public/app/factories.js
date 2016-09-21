angular.module('AirplanesFactories', ['ngResource'])
.factory('AirplanesAPI', ['$resource', function($resource) {
  return $resource('/api/airplanes/:id');
}]);