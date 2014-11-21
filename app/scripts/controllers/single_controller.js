(function () {

  angular.module('AppointmentList')
  .controller('SingleController',
  ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

    $http.get(appUrl + $routeParams.aid).success( function (data) {
      $scope.appointment = data;
    });

  }]);

}());
