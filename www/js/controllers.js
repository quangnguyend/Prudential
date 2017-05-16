angular.module('prudential.controllers', [
  'prudential.controllers.advancedinput'
])

  .controller('AppCtrl', function ($scope, $rootScope, CommonService) {
    $rootScope.showBar = true
    $rootScope.showBack = true
    $rootScope.showMenu = true

    $scope.exit = function () {
      var confirm = CommonService.getConfirm('Exit', 'Do you want to close this application ?')
      confirm.then(function (res) {
        if (res) {
          if (navigator.app) {
            navigator.app.exitApp()
          } else if (navigator.device) {
            navigator.device.exitApp()
          }
        }
      })
    }
  })

  .controller('HomeCtrl', homeCtrl)

  .controller('AddQuestionsCtrl', AddQuestionsCtrl)

  .controller('AssetmentRiskCtrl', AssetmentRiskCtrl)

  .controller('AgenFillInCtrl', AgenFillInCtrl)
