(function () {
  angular
    .module('ApptList', ['ngRoute'])
    .constant({
      'apptUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/appointments1/'
    })
    .config(function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'templates/main.html',
            controller: 'MainCtrl'
          })
          .when('/add', {
            templateUrl: 'templates/add.html',
            controller: 'AddCtrl'
          })
          .when('/single/:apptId', {
            templateUrl: 'templates/single.html',
            controller: 'SingleCtrl'
          })
          .otherwise({
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
