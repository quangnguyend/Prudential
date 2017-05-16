(function() {

    'use strict';
    angular.module('app', [
        /* Shared modules */
        'blocks.router',
        'app.employee'
    ]);

})();


// angular.module('directory', ['ionic', 'directory.services', 'directory.controllers'])


//     .config(function ($stateProvider, $urlRouterProvider) {

//         // Ionic uses AngularUI Router which uses the concept of states
//         // Learn more here: https://github.com/angular-ui/ui-router
//         // Set up the various states which the app can be in.
//         // Each state's controller can be found in controllers.js
//         $stateProvider

//             .state('employee-index', {
//                 url: '/employees',
//                 templateUrl: 'templates/employee-index.html',
//                 controller: 'EmployeeIndexCtrl'
//             })

//             .state('employee-detail', {
//                 url: '/employee/:employeeId',
//                 templateUrl: 'templates/employee-detail.html',
//                 controller: 'EmployeeDetailCtrl'
//             })

//             .state('employee-reports', {
//                 url: '/employee/:employeeId/reports',
//                 templateUrl: 'templates/employee-reports.html',
//                 controller: 'EmployeeReportsCtrl'
//             });

//         // if none of the above states are matched, use this as the fallback
//         $urlRouterProvider.otherwise('/employees');

//     });
