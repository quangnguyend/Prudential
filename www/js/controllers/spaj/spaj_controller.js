
'use strict'

function spajCtrl ($scope, $rootScope, $ionicPopup, UserService, DataService) {
  $rootScope.showBar = true
  $rootScope.showBack = false
  $rootScope.showMenu = true

  // default view is POLICY
  $scope.view = 'POLICY'
  $scope.policyStep = '1'
  $scope.changeView = function (view) {
    $scope.view = view || $scope.view
  }

  $scope.policy = {
    changeStep: function (step) {
      $scope.policyStep = step || $scope.policyStep
    }
  }

  $scope.goTo = function (id) {
    $location.hash(id)
    $ionicScrollDelegate.anchorScroll()
  }
}
