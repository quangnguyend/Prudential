
'use strict'

function policyCtrl($scope, $rootScope) {
  $rootScope.showBar = true
  $rootScope.showBack = false
  $rootScope.showMenu = true

  // default view is POLICY
  $scope.view = '1'
  $scope.changeView = function (view) {
    $scope.view = view || $scope.view
  }
}
