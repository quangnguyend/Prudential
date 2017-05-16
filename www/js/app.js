// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('prudential', ['ionic', 'prudential.controllers', 'prudential.services', 'ngCordova'])

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
      .state('app.home', {
        cache: false,
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.terms', {
        cache: false,
        url: '/terms-conditions',
        views: {
          'menuContent': {
            templateUrl: 'templates/terms_conditions.html',
            controller: 'TermsCtrl'
          }
        }
      })
      .state('app.needs-assesment-risk', {
        cache: false,
        url: '/needs-assesment-risk',
        views: {
          'menuContent': {
            templateUrl: 'templates/needs_assesment_risk.html',
            controller: 'AssetmentRiskCtrl'
          }
        }
      })
      .state('app.policy', {
        cache: false,
        url: '/policy-privacy',
        views: {
          'menuContent': {
            templateUrl: 'templates/policy_privacy.html',
            controller: 'PolicyCtrl'
          }
        }
      })
      .state('app.addquestions', {
        cache: false,
        url: '/addquestions',
        views: {
          'menuContent': {
            templateUrl: 'templates/agent/additional_questions.html',
            controller: 'AddQuestionsCtrl'
          }
        }
      })
      .state('app.agentfillin', {
        cache: false,
        url: '/agent_fillin',
        views: {
          'menuContent': {
            templateUrl: 'templates/agent/agent_fill_in.html',
            controller: 'AgenFillInCtrl'
          }
        }
      })
      .state('app.agentadvancedinput', {
        cache: false,
        url: '/agent_advanced_input',
        views: {
          'menuContent': {
            templateUrl: 'templates/agent/agent_advanced_input.html',
            controller: 'AgentAdvancedInputCtrl'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home')
  })
