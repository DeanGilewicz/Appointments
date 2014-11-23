(function (){

  angular.module('AppointmentList')
  .controller('ListController',
  ['appFactory', '$scope', '$location', 'appUrl',
  function (appFactory, $scope, $location, appUrl) {

    appFactory.getAppointments().success( function (results) {
      $scope.appointments = results;
    });

    // $scope.viewSingle = function (appointment) {
    //   $location.path('/single/' + appointment._id);
    // };

    $scope.addAppointment = function (appointment) {
      appFactory.addAppointment(appointment);
      // $rootScope.$on('app:added', function() {
        $location.path('/');
      // });
    }

  }]);

}());
