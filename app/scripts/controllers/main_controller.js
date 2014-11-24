(function () {
  angular
    .module('ApptList')
    .controller('MainCtrl',
      ['apptFactory', '$scope',
        function(apptFactory, $scope) {

          apptFactory.getAppts().success( function (results) {
            $scope.appts = results;
            // console.log(results);
            // $scope.appts.date = new Date(results.date);
            // console.log($scope.appts.date);
            // $scope.appts.time = new Date(results.time);
          });

    }]);

}());
