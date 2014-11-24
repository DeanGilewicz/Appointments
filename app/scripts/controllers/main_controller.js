(function () {
  angular
    .module('ApptList')
    .controller('MainCtrl',
      ['apptFactory', '$scope',
        function(apptFactory, $scope) {

          apptFactory.getAppts().success( function (results) {
            $scope.appts = results;
          });

    }]);

}());
