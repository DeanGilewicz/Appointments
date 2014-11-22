(function () {

  angular.module('AppointmentList')
  .controller('AddController',
  ['appFactory', '$scope', '$http', '$location', 'appUrl', function (appFactory, $scope, $http, $location, appUrl) {

    $scope.addAppointment = function (app) {
      $http.post(appUrl, app).success( function () {
        $location.path('/');
      });

    };

  }]);


}());
