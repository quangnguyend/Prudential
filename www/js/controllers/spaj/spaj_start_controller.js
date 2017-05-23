function spajStartCtrl ($scope, $rootScope) {
  $rootScope.showBar = true
  $rootScope.showBack = true
  $rootScope.showMenu = true

  var vm = this
  vm.policyHolder =
  {
    'main_primary_insured': false,
    'policy_payor': false,
    'additional_insured': false,
    'no_insured': false
  }
}