(function () {
  angular
    .module('ApptList')
    .controller('SingleCtrl',
    ['apptFactory', '$scope', '$routeParams', '$rootScope', '$location',
      function (apptFactory, $scope, $routeParams, $rootScope, $location) {

        apptFactory.getAppt($routeParams.id).then( function (data) {
          $scope.appt = data;
          $scope.appt.date = new Date(data.date);
          $scope.appt.time = new Date(data.time);
        });

        $scope.editAppt = function(appt) {
          apptFactory.editAppt(appt);
          $rootScope.$on('appt:edited', function () {
            $location.path('/');
          });
        }

        $scope.deleteAppt = function(appt) {
          apptFactory.deleteAppt(appt);
          $rootScope.$on('appt:deleted', function () {
            $location.path('/');
          });
        }

      }]);

}());
