
'use strict'

function step1Ctr ($scope, $rootScope) {
  $rootScope.showBar = true
  $rootScope.showBack = false
  $rootScope.showMenu = true
  $rootScope.nextpagePh = function () {
    console.log('sssss')
  }
  // default view is POLICY
  // $scope.view = '1'
  // $scope.changeView = function (view) {
  //   $scope.view = view || $scope.view
  // }
}
