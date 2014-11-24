(function () {

  var app = angular.module('ApptList', ['ngRoute', 'restangular']);

  app.config(function($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://tiy-atl-fe-server.herokuapp.com/collections/');
    RestangularProvider.setRestangularFields({
      id: '_id'
    });

      $routeProvider.when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      });

      $routeProvider.when('/add', {
        templateUrl: 'templates/add.html',
        controller: 'AddCtrl'
      });

      $routeProvider.when('/single/:id', {
        templateUrl: 'templates/single.html',
        controller: 'SingleCtrl'
      });

      $routeProvider.otherwise({
        redirectTo: '/'
      });
    });

    // .directive('crossOut', [function () {
    //   return {
    //     restrict: 'E',
    //     link: function ($scope, element, attrs) {
    //       element.bind('click', function () {
    //         if ($scope.app.complete === undefined || $scope.app.complete === 'incomplete') {
    //           $scope.app.complete = 'complete';
    //           $scope.app.put();
    //         }
    //         else {
    //           $scope.app.complete = 'incomplete';
    //           $scope.app.put();
    //         }
    //       });
    //     }
    //   }
    // });

}());
