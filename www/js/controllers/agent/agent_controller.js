'use strict'
function agentCtrl ($scope, $state, $rootScope, $ionicPopup, UserService) {
  $rootScope.showBar = false
  $rootScope.showBack = false
  $rootScope.showMenu = false

  var vm = this
  vm.agents = []
  vm.title = 'Agent'
}
