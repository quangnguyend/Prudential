
'use strict'

function spajCtrl ($scope, $rootScope, $ionicPopup, UserService, DataService) {
  $rootScope.showBar = true
  $rootScope.showBack = false
  $rootScope.showMenu = true

  // default view is POLICY
  $scope.view = 'POLICY'
  $scope.changeView = function (view) {
    console.log('ssss')
    $scope.view = view || $scope.view
  }
  $scope.changeVCon = function (view) {
    console.log('aaaa')
    $scope.aaaa = view || $scope.aaaa
  }
}
