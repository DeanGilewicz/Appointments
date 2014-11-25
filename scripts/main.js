(function () {

  var app = angular.module('ApptList', ['ngRoute', 'restangular']);

  app.config(function($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://tiy-atl-fe-server.herokuapp.com/collections/');
    RestangularProvider.setRestangularFields({
      id: '_id'
    });

      $routeProvider.when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      });

      $routeProvider.when('/add', {
        templateUrl: 'templates/add.html',
        controller: 'AddCtrl'
      });

      $routeProvider.when('/single/:id', {
        templateUrl: 'templates/single.html',
        controller: 'SingleCtrl'
      });

      $routeProvider.otherwise({
        redirectTo: '/'
      });
    });

    // .directive('crossOut', [function () {
    //   return {
    //     restrict: 'E',
    //     link: function ($scope, element, attrs) {
    //       element.bind('click', function () {
    //         if ($scope.app.complete === undefined || $scope.app.complete === 'incomplete') {
    //           $scope.app.complete = 'complete';
    //           $scope.app.put();
    //         }
    //         else {
    //           $scope.app.complete = 'incomplete';
    //           $scope.app.put();
    //         }
    //       });
    //     }
    //   }
    // });

}());

(function () {
  angular
    .module('ApptList')
    .factory('apptFactory',
      ['$rootScope', 'Restangular',
        function($rootScope, Restangular) {

          //defines the endpoint where Restangular gets the data - url defined in app.config with Restangular provider
          var allAppts = Restangular.all('appointments1');

          // retrieves data from server
          function getAppts () {
            return allAppts.getList();
          }
          // retrieves a single appt from the server based on id
          function getAppt (id) {
            return allAppts.get(id);
          }
          // add a appt
          function addAppt (appt) {
            allAppts.post(appt).then( function () {
              // broadcast to the parent controller that the appt has been added
              $rootScope.$broadcast('appt:added');
            });
          }
          // edit a appt
          function editAppt (appt) {
            appt.put().then( function () {
              // broadcast to the parent controller that the appt has been edited/updated
              $rootScope.$broadcast('appt:edited');
            });
          }

          function deleteAppt (appt) {
            appt.remove().then( function () {
              $rootScope.$broadcast('appt:deleted');
            });
          }

          return {

            getAppts: getAppts,
            getAppt: getAppt,
            addAppt: addAppt,
            editAppt: editAppt,
            deleteAppt: deleteAppt

          };

    }]);


}());

(function () {
  angular
    .module('ApptList')
    .controller('MainCtrl',
      ['apptFactory', '$scope',
        function(apptFactory, $scope) {

          apptFactory.getAppts().then( function (results) {
            $scope.appts = results;
          });

    }]);

}());

(function () {
  angular
    .module('ApptList')
    .controller('AddCtrl',
      ['apptFactory', '$scope', '$rootScope', '$location',
        function (apptFactory, $scope, $rootScope, $location) {

          $scope.addAppt = function (appt) {
            apptFactory.addAppt(appt);
            $rootScope.$on('appt:added', function () {
              $location.path('/');
            });
          }
    }]);

}());

(function () {
  angular
    .module('ApptList')
    .controller('SingleCtrl',
    ['apptFactory', '$scope', '$routeParams', '$rootScope', '$location',
      function (apptFactory, $scope, $routeParams, $rootScope, $location) {

        apptFactory.getAppt($routeParams.id).then( function (data) {
          $scope.appt = data;
          $scope.appt.date = new Date(data.date);
          $scope.appt.time = new Date(data.time);
        });

        $scope.editAppt = function(appt) {
          apptFactory.editAppt(appt);
          $rootScope.$on('appt:edited', function () {
            $location.path('/');
          });
        }

        $scope.deleteAppt = function(appt) {
          apptFactory.deleteAppt(appt);
          $rootScope.$on('appt:deleted', function () {
            $location.path('/');
          });
        }

      }]);

}());
