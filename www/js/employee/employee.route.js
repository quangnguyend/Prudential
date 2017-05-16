(function() {
    'use strict';

    angular
        .module('app.employee')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
               var otherwise = '/';
            routerHelper.configureStates(getStates(), otherwise);
    }
	function getStates() {
		console.log('quang')
        return [
            {
                state: 'employee',
                config: {
                    url: '/',
                    templateUrl: 'templates/employee.html',
                    controller: 'EmployeeIndexCtrl'
                }
            }
        ];
    }
})();
