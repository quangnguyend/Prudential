function riskProfileCtrl ($scope, $rootScope) {
  $rootScope.showBar = true
  $rootScope.showBack = true
  $rootScope.showMenu = true

  $scope.data = {
    investment_knowledge: null,
    year_of_experience: null,
    how_important: null,
    investment_key_objective: null,
    goal: null
  }

  $scope.click = function () {
  }
}
