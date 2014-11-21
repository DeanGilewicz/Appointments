(function () {

  angular.module('AppointmentList', ['ngRoute'])

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

  })

  .directive('clickAppointment', function () {
    return {
      link: function ($scope, element, attrs) {
        element.bind('click', function () {
          console.log('my appointment directive was run');
        });
      }
    }
  });


}());
