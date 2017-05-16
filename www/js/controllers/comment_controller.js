function commentCtrl($scope, $rootScope, $stateParams, UserService, SubmissionService, DbService, CommonService) {
    $rootScope.showBar = true;
    $rootScope.showBack = true;
    $rootScope.showMenu = true;

    UserService.isLoggedOut();

    $scope.name = $stateParams.name;
    $scope.sid = $stateParams.sid;
    $scope.photos = [];
    $scope.comment = '';
    if ($rootScope.uid > 0) {
        SubmissionService.getStep($scope, 'comment');
    }
    
    $scope.read = function (id) {
    		var steps = DbService.getItem($stateParams.sid);
		var comments = DbService.getStep($stateParams.sid, 'comment');

		for (var i in comments.list) {
			if (comments.list[i].id == id) {
				comments.list[i].unread = 0;
				comments.list[i].read = 1;
				$scope.list[i].unread = 0;
				steps.comment.unread -= 1;
				break;			
			}	
		}
		
		DbService.setStep($stateParams.sid, 'comment', comments);
		DbService.setItem($stateParams.sid, steps);
    }
    
    $scope.add = function () {
        var confirm = CommonService.getConfirm("Comment", "Do you want to post comment ?")
        confirm.then(function(res) {
            if (res) {
                var comment = {"cid": 0, "comment": $scope.comment, "files": angular.toJson($scope.photos)};
                $scope.list.push(comment);
            }
        });   
    }
    
    $scope.delete = function (id) {
		var confirm = CommonService.getConfirm('Delete Comment', 'Do you want to delete this comment ?');
		confirm.then(function(res) {
			if (res) {
				var steps = DbService.getItem($stateParams.sid);
				var comments = DbService.getStep($stateParams.sid, 'comment');
				for (var i in comments.list) {
					if (comments.list[i].id == id) {
						comments.list[i].deleted = 1;
						$scope.list[i].deleted = 1;
						steps.comment.count -= 1;
						break;			
					}	
				}
				
				DbService.setStep($stateParams.sid, 'comment', comments);
				DbService.setItem($stateParams.sid, steps);
			}		
		});
    }
    
    $scope.browse = function(step, key) {
        var popup = CommonService.getOptions($ionicPopup, 'Your device', 'From Camera');

        popup.then(function(res) {
            if (res == 1) {
                FileService.browseAFile($scope, $stateParams.sid, step, key);
            } else if (res == 2) {
                FileService.takeAPhoto($scope, $stateParams.sid, step, key);
            }
        });
    }
    
    $scope.deletePhoto = function (key) {
		$scope.photos.splice(key, 1);    
    }
}