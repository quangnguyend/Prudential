// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('prudential', ['ionic', 'prudential.controllers', 'prudential.services', 'ngAnimate', 'ui.router', 'ngCordova'])

  .run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
        cordova.plugins.Keyboard.disableScroll(true)
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault()
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/layout/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.spaj_start', {
        cache: false,
        url: '/spaj_start',
        views: {
          'menuContent': {
            templateUrl: 'templates/spaj/spaj_start.html',
            controller: 'SpajStartCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.risk_profile', {
        cache: false,
        url: '/risk_profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/risk_profile/risk_profile.html',
            controller: 'RiskProfileCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.spaj', {
        cache: false,
        url: '/spaj',
        views: {
          'menuContent': {
            templateUrl: 'templates/spaj/spaj.html',
            controller: 'SpajCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.spaj_esignature_confirmation', {
        cache: false,
        url: '/spaj_esignature_confirmation',
        views: {
          'menuContent': {
            templateUrl: 'templates/spaj/e-signature-confirmation.html',
            controller: 'ESignatureConfirmCtrl',
            controllerAs: 'vm'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/spaj_start')
  })
