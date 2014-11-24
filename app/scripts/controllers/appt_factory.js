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
            return allAppts.get();
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
