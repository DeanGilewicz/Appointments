(function () {

  angular.module('AppontmentList')
  .controller('SingleController',
  ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

    $http.get(appUrl + $routeParams.pid).success( function (data) {
      $scope.appointment = data;
    });
    
  }]);

}());
