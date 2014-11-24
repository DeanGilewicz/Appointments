(function () {
  angular
    .module('ApptList')
    .controller('MainCtrl',
      ['apptFactory', '$scope',
        function(apptFactory, $scope) {

          apptFactory.getAppts().then( function (results) {
            $scope.appts = results;
          });

    }]);

}());
