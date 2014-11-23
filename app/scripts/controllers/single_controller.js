(function () {

  angular.module('AppointmentList')
  .controller('SingleController',
  ['appFactory', '$scope', '$routeParams', '$location', function (appFactory, $scope, $routeParams, $location) {

    appFactory.get($routeParams.aid).success( function (data) {
      $scope.app = data;
      $scope.app.date = new Date(data.date);
      $scope.app.time = new Date(data.time);
    });

    $scope.editAppointment = function(app) {
      appFactory.editAppointment(app);
      $location.path('/');
    }

    $scope.deleteAppointment = function(app) {
      appFactory.deleteAppointment(app);
      $location.path('/');
    }

  }]);

}());
