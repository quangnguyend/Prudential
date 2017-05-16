function itemCtrl ($scope, $rootScope, $stateParams, UserService, SubmissionService) {
    $rootScope.showBar = true;
    $rootScope.showBack = true;
    $rootScope.showMenu = true;

    UserService.isLoggedOut();

    $scope.name = $stateParams.name;
    $scope.sid = $stateParams.sid;
    SubmissionService.getItem($scope);
}