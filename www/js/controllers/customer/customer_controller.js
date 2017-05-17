function customerCtrl ($scope, $rootScope, $ionicPopup, UserService, SubmissionService, SyncService) {
  $rootScope.showBar = true
  $rootScope.showBack = true
  $rootScope.showMenu = true

  var vm = this
  vm.customers = []
  vm.title = 'Customers'
}
