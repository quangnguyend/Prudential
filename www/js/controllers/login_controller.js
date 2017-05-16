function loginCtrl ($scope, $rootScope, $ionicPopup, UserService) {
    $rootScope.showBar = false;
    $rootScope.showBack = false;
    $rootScope.showMenu = false;

    $scope.loginData = {};
    $scope.error = false;
    $scope.errorMessage = "";
    $scope.confirm = null;

    UserService.isLoggedIn();

	$scope.useApp = function() {
		$scope.confirm.close();
	}

	$scope.useOnline = function() {
		$scope.confirm.close();
		cordova.InAppBrowser.open($rootScope.base_url, '_self', 'location=yes');
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

	$scope.checkAgreeWithTerms = function() {
		var agree = localStorage.getItem("platinum_registration_agree_with_terms");
		if (agree == null) {
			var confirm = $ionicPopup.show({
				templateUrl: 'templates/popup.html',
				title: 'Terms & Conditions',
				scope: $scope,
        cssClass: "agreement",
				buttons: [
					{
						text: '<b>I agree</b>',
						type: 'button-positive',
						onTap: function(e) {
							localStorage.setItem("platinum_registration_agree_with_terms", 1);
						}
					}
				]
			});

			confirm.then(function(res) {
				if ($rootScope.init) {
					$rootScope.init = false;
				}
			});
		} else if ($rootScope.init) {
			$rootScope.init = false;
		}
	}

	$scope.openUrl = function(url) {
		cordova.InAppBrowser.open(url, '_self', 'location=yes');
	}

    if ($rootScope.uid == 0) {
		$scope.checkAgreeWithTerms();
    }

    $scope.doLogin = function() {
        UserService.login($scope);
    }
}
