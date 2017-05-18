
'use strict'

function illustrationCtrl ($scope, $rootScope, $ionicPopup, UserService, DataService) {
  $rootScope.showBar = true
  $rootScope.showBack = true
  $rootScope.showMenu = true

    // default view is PROTECTION
  $scope.view = 'PROTECTION'
  $scope.changeView = function (view) {
    $scope.view = view || $scope.view
  }
  $scope.data = {
    protection_chart_1: [
      {
        data_1: '1,000,000',
        data_2: 'Coverage (IDR 1000s)'
      },
      {
        data_1: '56 years',
        data_2: 'Cover Util'
      },
      {
        data_1: '4,00,000',
        data_2: 'Premium (IDR 1000s)'
      }
    ],
    protection_chart_2: [
      {
        data_1: '1,000,000',
        data_2: 'PRUearly stage crisis cover syariah'
      },
      {
        data_1: '5,000,000',
        data_2: 'PRUspouse payor syariah 33'
      },
      {
        data_1: '1,000,000',
        data_2: 'PRUpersonal accident death & disablement'
      }
    ]
  }
}
