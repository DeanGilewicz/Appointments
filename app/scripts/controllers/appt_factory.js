(function () {
  angular
    .module('ApptList')
    .factory('apptFactory',
      ['$rootScope', '$http', 'apptUrl', '$broadcast',
        function( $rootScope, $http, apptUrl, $broadcast) {

          // retrieves data from server
          function getAppts () {
            return $http.get(apptUrl);
          }
          // retrieves a single appt from the server based on id
          function getAppt (id) {
            return $http.get(apptUrl + id);
          }
          // add a appt
          function addAppt (appt) {
            return $http.post(apptUrl, appt).success( function () {
              // broadcast to the parent controller that the appt has been added
              $rootScope.$broadcast('appt:added');
            });
          }
          // edit a appt
          function editAppt (appt) {
            return $http.post(apptUrl + app._id, appt).success( function () {
              // broadcast to the parent controller that the appt has been edited/updated
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
