(function () {

  angular.module('AppointmentList')
  .controller('AddController',
  ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $scope.addAppointment = function (app) {
      $http.post(appUrl, app).success( function () {
        $location.path('/');
      });

    };

  }]);


}());
