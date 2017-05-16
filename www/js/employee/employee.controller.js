(function () {
    'use strict';

    angular
        .module('app.employee')
        .controller('EmployeeIndexCtrl', Customers);

    /* @ngInject */
    function Customers($state) {
        console.log('ssqqqqs')
        var vm = this;
        vm.title = 'Customers';
        
    }
})();
