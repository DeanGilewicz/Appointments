(function () {
  angular
    .module('ApptList')
    .controller('AddCtrl',
      ['appFactory', '$scope', '$rootScope', '$location',
        function (appFactory, $scope, $rootScope, $location) {

          $scope.addAppt = function (appt) {
            appFactory.addAppt(appt);
            $rootScope.$on('appt:added', function () {
              $location.path('/');
            });
          }
    }]);

}());
