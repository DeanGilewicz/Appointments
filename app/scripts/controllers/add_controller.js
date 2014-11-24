(function () {
  angular
    .module('ApptList')
    .controller('AddCtrl',
      ['apptFactory', '$scope', '$rootScope', '$location',
        function (apptFactory, $scope, $rootScope, $location) {

          $scope.addAppt = function (appt) {
            apptFactory.addAppt(appt);
            $rootScope.$on('appt:added', function () {
              $location.path('/');
            });
          }
    }]);

}());
