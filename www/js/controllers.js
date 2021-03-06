angular.module('prudential.controllers', [])

  .controller('AppCtrl', function ($scope, $rootScope, $cordovaNetwork, UserService, SyncService, CommonService, DataService) {
    $rootScope.synchronizing = false
    $rootScope.queue = []
    $rootScope.localSync = 0
    $rootScope.serverSync = 0
    $rootScope.failed = 0
    $rootScope.update = []
    $rootScope.updating = 0
    $rootScope.loading = []
    $rootScope.uid = 0
    $rootScope.session = ''
    $rootScope.showBar = true
    $rootScope.showBack = true
    $rootScope.showMenu = true
    $rootScope.init = true
    $rootScope.base_url = 'https://www.headwatersroofinggroup.com'

    UserService.authenticate()

    $scope.logout = function () {
      UserService.logout()
    }

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

    $scope.sync = function () {
      if ($rootScope.uid > 0 && !$rootScope.synchronizing) {
        SyncService.sync(null)
      }
    }

    setTimeout($scope.sync, 1800000)
  })

  .controller('SpajFormCtrl', spajFormCtrl)
  .controller('IllustrationCtrl', illustrationCtrl)
  .controller('RiskProfileCtrl', riskProfileCtrl)
  .controller('IllustrationCtrl', illustrationCtrl)
  .controller('SpajCtrl', spajCtrl)
  .controller('Spaj2_11Ctrl', spaj2_11Ctrl)
  .controller('termsConditionsCtrl', termsConditionsCtrl)
  .controller('ESignatureCtrl', eSignatureCtrl)

  .directive('groupedRadio', groupedRadio)
  .directive('groupedRedRadio', groupedRedRadio)
  .directive('groupedMultiChoice', groupedMultiChoice)
  .directive('dataService', dataService)
