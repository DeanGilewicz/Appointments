(function () {
  angular
    .module('ApptList')
    .factory('apptFactory',
      ['$rootScope', '$http', 'apptUrl', '$broadcast',
        function( $rootScope, $http, apptUrl, $broadcast) {

          function getAppts () {
            return $http.get(apptUrl);
          }

          function getAppt (id) {
            return $http.get(apptUrl + id);
          }

          function addAppt (appt) {
            return $http.post(apptUrl, appt).success( function () {
              $rootScope.$broadcast('appt:added');
            });
          }

          function editAppt (appt) {
            return $http.post(apptUrl + app._id, appt).success( function () {
              $rootScope.$broadcast('app:edited');
            });
          }

          // function deleteAppt (appt) {
          //   return $http.delete(apptUrl + app._id, appt);
          // }

          return {

            getAppts: getAppts,
            getAppt: getAppt,
            addAppt: addAppt,
            editAppt: editAppt
          }

    }]);


}());
