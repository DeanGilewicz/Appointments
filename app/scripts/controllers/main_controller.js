(function (){
  angular
    .module('ApptList')
    .controller('MainCtrl',
      ['$scope', '$location',
        function($scope, $location) {
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
