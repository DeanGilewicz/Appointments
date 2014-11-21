(function (){

  angular.module('AppointmentList')

  .controller('ListController',
  ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $http.get(appUrl).success( function (results){

      $scope.appointments = results;
      console.log(results);
    });

    $scope.viewSingle = function (appointment) {
      console.log(appointment);
      $location.path('/single/' + appointment._id);
      console.log(appointment._id);
    };


  }]);

}());
