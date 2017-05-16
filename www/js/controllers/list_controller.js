 function listCtrl ($scope, $rootScope, $ionicPopup, UserService, SubmissionService, SyncService) {
    $rootScope.showBar = true;
    $rootScope.showMenu = true;
	  $scope.confirm = null;

    UserService.isLoggedOut();

	$scope.useApp = function() {
		$scope.confirm.close();
	}

	$scope.useOnline = function() {
		$scope.confirm.close();
		cordova.InAppBrowser.open($rootScope.base_url, '_system', 'location=yes');
	}

    $scope.workOnline = function() {
		$scope.confirm = $ionicPopup.show({
			templateUrl: 'templates/app_or_online.html',
			title: 'Use app or Online',
			scope: $scope,
			cssClass: "app_or_web",
			buttons: []
		});

		$scope.confirm.then(function(res) {
		});
    }

    if ($rootScope.uid > 0) {
		if ($rootScope.init) {
			$rootScope.init = false;
			$scope.workOnline();
		}

        SubmissionService.getList($scope);
        if (typeof $scope.list == 'undefined' || $scope.list == null || $scope.list.length == 0) {
        	SyncService.sync($scope);
        }
    }
}
