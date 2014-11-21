(function () {

  angular.module('AppointmentList')
  .controller('AddController',
  ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $scope.appointment = {};

    $scope.addAppointment = function () {

      $http.post(appUrl, $scope.appointment).success( function (data) {
        $location.path('/');
      });

    };

  }]);


}());
