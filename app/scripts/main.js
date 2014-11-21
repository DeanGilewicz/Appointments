(function () {

  angular.module('AppointmentList', ['ngRoute'])

  .constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/appointments/'
  })

  .config( function ($routeProvider){

    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'ListController'
    });

    $routeProvider.when('/add', {
      templateUrl: 'templates/add.html',
      controller: 'AddController'
    });

    $routeProvider.when('/single/:aid', {
      templateUrl: 'templates/single.html',
      controller: 'SingleController'
    });

    $routeProvider.otherwise({
      templateUrl: 'templates/other.html',
      controller: 'OtherController'
    });

  });

}());
