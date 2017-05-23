'use strict'

function agentCtrl ($scope, $rootScope, $ionicPopup, UserService, DataService) {
  $rootScope.showBar = true
  $rootScope.showBack = false
  $rootScope.showMenu = false
  $scope.agent = {}
  $scope.collectInfo = function () {
    var formData = $scope.agent

    DataService.setData(formData)
  }
}

function groupedRadio () {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      model: '=ngModel',
      value: '=groupedRadio'
    },
    link: function (scope, element, attrs, ngModelCtrl) {
      element.on('click', function (e) {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(scope.value)
        })
      })
      scope.$watch('model', function (newVal) {
        element.removeClass('button-dark')
        if (newVal === scope.value) {
          element.addClass('button-dark')
        }
      })
    }
  }
}
function groupedRedRadio () {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      model: '=ngModel',
      value: '=groupedRedRadio'
    },
    link: function (scope, element, attrs, ngModelCtrl) {
      element.on('click', function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(scope.value)
        })
      })
      scope.$watch('model', function (newVal) {
        element.removeClass('button-assertive')
        if (newVal === scope.value) {
          element.addClass('button-assertive')
        }
      })
    }
  }
}
function groupedMultiChoice () {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      model: '=ngModel',
      value: '=groupedMultiChoice'
    },
    link: function (scope, element, attrs, ngModelCtrl) {
      element.on('click', function (e) {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(scope.value)
        })
        element.toggleClass('button-assertive')
      })
      scope.$watch('model', function (newVal) {
      })
    }
  }
}

function spaj2_11Ctrl () {
  // Todo
}
