(function () {

  angular.module('AppointmentList')
  .controller('SingleController',
  ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

    appFactory.get($routeParams.id).success( function (data) {
      $scope.app = data;
      $scope.app.date = new Date(data.date);
      $scope.app.time = new Date(data.time);
      console.log(data);
    });

    $scope.editAppointment = function(app) {
      .appFactory.editAppointment(app);
      $rootScope.$on('app:edited'), funcion () {
        $location.path('/');
      });
    }

    $scope.deleteAppointment = function(app) {
      .appFactory.deleteAppointment(app);
      $location.path('/');
    }

  }]);

}());
