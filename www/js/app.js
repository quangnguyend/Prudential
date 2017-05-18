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

      .state('app.customer_name', {
        cache: false,
        url: '/customer_name',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_name.html',
            controller: 'CustomerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.customer_dob', {
        cache: false,
        url: '/customer_dob',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_dob.html',
            controller: 'CustomerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.customer_job', {
        cache: false,
        url: '/customer_job',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_job.html',
            controller: 'CustomerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.customer_goal', {
        cache: false,
        url: '/customer_goal',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_goal.html',
            controller: 'CustomerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.customer_existing', {
        cache: false,
        url: '/customer_existing',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_existing.html',
            controller: 'CustomerCtrl',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.customer_smoker', {
        cache: false,
        url: '/customer_smoker',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_smoker.html',
            controller: 'CustomerCtrl'
          }
        }
      })
      .state('app.customer_thanks', {
        cache: false,
        url: '/customer_thanks',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_thanks.html',
            controller: 'CustomerCtrl'
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
      .state('app.mycustomer', {
        cache: false,
        url: '/mycustomer',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer/customer_my_customer.html',
            controller: 'MyCustomerCtrl'
          }
        }
      })
      .state('app.projection', {
        cache: false,
        url: '/illustration',
        views: {
          'menuContent': {
            templateUrl: 'templates/illustration/illustration.html',
            controller: 'IllustrationCtrl'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/agent')
  })
