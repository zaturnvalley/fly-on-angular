angular.module('AirplaneApp', ['ui.router', 'AirplanesCtrls'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('airplanes', {
    url: '/',
    templateUrl: 'app/views/airplanes.html',
    controller: 'AirplanesCtrl'
  })
  .state('airplaneShow', {
    url: '/airplane/:id',
    templateUrl: 'app/views/airplaneShow.html',
    controller: 'AirplaneShowCtrl'
  })
  .state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);