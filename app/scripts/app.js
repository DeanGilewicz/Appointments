(function () {

  var app = angular.module('AppointmentList', ['ngRoute'])

  .constant('http://tiy-atl-fe-server.herokuapp.com/collections/appointments1/')

  .config( function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .when('/add', {
        templateUrl: 'templates/add.html',
        controller: 'AddController'
      })
      .when('/single/:apptid', {
        templateUrl: 'templates/single.html',
        controller: 'SingleController'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

  // .directive('clickAppointment', function () {
  //   return {
  //     link: function ($scope, element, attrs) {
  //       element.bind('click', function () {
  //         console.log('my appointment directive was run');
  //       });
  //     }
  //   }
  // });


}());
