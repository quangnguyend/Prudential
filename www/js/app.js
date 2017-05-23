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
      .state('app.agent', {
        cache: false,
        url: '/agent',
        views: {
          'menuContent': {
            templateUrl: 'templates/agent/agent_fill_in.html',
            controller: 'AgentCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.customer', {
        cache: false,
        url: '/customer',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/index.html',
            controller: 'CustomerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.spaj_start', {
        cache: false,
        url: '/spaj_start',
        views: {
          'menuContent': {
            templateUrl: 'templates/spaj_form/spaj_start.html',
            controller: 'SpajFormCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.addquestions', {
        cache: false,
        url: '/addquestions',
        views: {
          'menuContent': {
            templateUrl: 'templates/agent/additional_questions.html',
            controller: 'AddQuestionsCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.mycustomer', {
        cache: false,
        url: '/mycustomer',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_my_customer.html',
            controller: 'MyCustomerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.illustration', {
        cache: false,
        url: '/illustration',
        views: {
          'menuContent': {
            templateUrl: 'templates/illustration/illustration.html',
            controller: 'IllustrationCtrl',
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
      .state('app.spaj_esignature', {
        cache: false,
        url: '/spaj_esignature',
        views: {
          'menuContent': {
            templateUrl: 'templates/spaj/e-signature.html',
            controller: 'ESignatureCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.spaj2_11', {
        cache: false,
        url: '/spaj_page2_11',
        views: {
          'menuContent': {
            templateUrl: 'templates/spaj/policy/page2_11.html',
            controller: 'SpajCtrl',
            controllerAs: 'vm'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/spaj')
  })
