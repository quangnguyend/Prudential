function syncCtrl ($scope, $rootScope, $ionicPopup, UserService, SubmissionService, SyncService) {
    $rootScope.showBar = true;
    $rootScope.showBack = true;
    $rootScope.showMenu = true;
	
	$scope.result = '';
	
    UserService.isLoggedOut();
    
    SyncService.sync($scope);
}