function contactCtrl ($scope, $rootScope, $stateParams, UserService, SubmissionService, DbService) {
    $rootScope.showBar = true;
    $rootScope.showBack = true;
    $rootScope.showMenu = true;

    UserService.isLoggedOut();

    $scope.name = $stateParams.name;
    $scope.sid = $stateParams.sid;
    if ($rootScope.uid > 0) {
        SubmissionService.getStep($scope, 'contact');
    }
    
    $scope.read = function (id) {
    		var steps = DbService.getItem($stateParams.sid);
		var contacts = DbService.getStep($stateParams.sid, 'contact');

		for (var i in contacts.list) {
			if (contacts.list[i].id == id) {
				contacts.list[i].unread = 0;
				contacts.list[i].read = 1;
				$scope.list[i].unread = 0;
				steps.contact.unread -= 1;
				break;			
			}	
		}
		
		DbService.setStep($stateParams.sid, 'contact', contacts);
		DbService.setItem($stateParams.sid, steps);
    }
}