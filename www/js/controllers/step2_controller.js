function step2Ctrl ($scope, $rootScope, $stateParams, UserService, SubmissionService, FileService, CommonService) {
    $rootScope.showBar = true;
    $rootScope.showBack = true;
    $rootScope.showMenu = true;

    UserService.isLoggedOut();

    $scope.name = $stateParams.name;
    $scope.sid = $stateParams.sid;
    if ($rootScope.uid > 0) {
        SubmissionService.getStep($scope, 'step2');
    }
    
    $scope.browse = function(step, key) {
        var popup = CommonService.getOptions('Your device', 'From Camera');

        popup.then(function(res) {
            if (res == 1) {
                FileService.browseAFile($scope, $stateParams.sid, step, key);
            } else if (res == 2) {
                FileService.takeAPhoto($scope, $stateParams.sid, step, key);
            }
        });
    }
}