(function (){

  angular.module('AppointmentList')

  .controller('ListController',
  ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $http.get(appUrl).success( function (results){

      $scope.appointments = results;
    });

    $scope.viewMore = function (appointment) {
      $location.path('/single/' + appointment.aid);
    };


  }]);

}());
