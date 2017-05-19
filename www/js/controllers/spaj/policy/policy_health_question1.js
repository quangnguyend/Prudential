function page26Ctrl ($scope, $rootScope) {
  $rootScope.showBar = true;
  $rootScope.showBack = true;
  $rootScope.showMenu = true;
  var question = null
  $scope.question1 = question;
  $scope.goTo = function (id) {
    $location.hash(id);
    $ionicScrollDelegate.anchorScroll();
  }

}