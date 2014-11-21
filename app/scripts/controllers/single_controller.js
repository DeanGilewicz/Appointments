(function () {

  angular.module('AppointmentList')
  .controller('SingleController',
  ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

    $http.get(appUrl + $routeParams.aid).success( function (data) {
      $scope.app = data;
      $scope.app.date = new Date(data.date);
      $scope.app.time = new Date(data.time);
      console.log(data);
    });


  }]);

}());
