(function (){
  angular
    .module('ApptList')
    .controller('MainCtrl',
      ['apptFactory', '$scope', '$location', '$rootScope',
        function(apptFactory, $scope, $location, $rootScope) {

          apptFactory.getAppts().then( function (results) {
            $scope.appts = results;
          });

          $scope.addAppt = function (appt) {
            apptFactory.addAppt(appt);
            $rootScope.$on('appt:added', function() {
              $location.path('/');
            });
          }

          // $scope.viewSingle = function (appt) {
          //   $location.path('/single/' + appt._id);
          // }

    }]);

}());
