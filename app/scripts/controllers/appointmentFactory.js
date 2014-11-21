(function () {

  angular.module('AppointmentList')
  .factory('appFactory', ['$rootScope', '$http', function ($rootScope, $http) {

    var appUrl = 'http://tiy-atl-fe-server.herokuapp.com/collections/appointments1/';

    function getAppointments () {
      return $http.get(appUrl);
    }

    function getAppointment (id) {
      return $http.get(appUrl + id);
    }

    function addAppointment (app) {
      return $http.post(appUrl, app).then( function () {
        $rootScope.$broadcast('app:added');
      });
    }

    function editAppointment (app) {
      return $http.post(appUrl + app._id, app).then( function () {
        $rootScope.$broadcast('app:edited');
      });
    }

    function deleteAppointment (app) {
      return $http.delete(appUrl + app._id, app);
    };

    return {

      getAppointments: getAppointments,
      getAppointment: getAppointment,
      addAppointment: addAppointment,
      editAppointment: editAppointment,
      deleteAppointment: deleteAppointment
    };

  }]);

}());
