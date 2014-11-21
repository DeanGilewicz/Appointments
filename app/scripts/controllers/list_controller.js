(function (){

  angular.module('AppontmentList')

  .controller('ListController',
  ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $http.get(appUrl).success( function (results){
      console.log(results);
      $scope.people = results;
    });

    $scope.viewMore = function (appointment) {
      console.log(person);
      $location.path('/single/' + appointment._id);
    };


  }]);

}());
