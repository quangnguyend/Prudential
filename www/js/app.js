// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('platinum', ['ionic', 'platinum.controllers', 'platinum.services', 'ngCordova'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.login', {
        cache: false,
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
          }
        }
      })

      .state('app.list', {
        cache: false,
        url: '/list',
        views: {
          'menuContent': {
            templateUrl: 'templates/list.html',
            controller: 'ListCtrl'
          }
        }
      })

      .state('app.item', {
        cache: false,
        url: '/item/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/item.html',
            controller: 'ItemCtrl'
          }
        }
      })

      .state('app.step1', {
        cache: false,
        url: '/step1/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/steps/step1.html',
            controller: 'Step1Ctrl'
          }
        }
      })

      .state('app.step2', {
        cache: false,
        url: '/step2/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/steps/step2.html',
            controller: 'Step2Ctrl'
          }
        }
      })

      .state('app.step3', {
        cache: false,
        url: '/step3/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/steps/step3.html',
            controller: 'Step3Ctrl'
          }
        }
      })
      .state('app.step4', {
        cache: false,
        url: '/step4/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/steps/step4.html',
            controller: 'Step4Ctrl'
          }
        }
      })
      .state('app.step5', {
        cache: false,
        url: '/step5/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/steps/step5.html',
            controller: 'Step5Ctrl'
          }
        }
      })
      .state('app.contacts', {
        cache: false,
        url: '/contact/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/steps/contacts.html',
            controller: 'ContactCtrl'
          }
        }
      })
      .state('app.comments', {
        cache: false,
        url: '/comment/:sid/:name',
        views: {
          'menuContent': {
            templateUrl: 'templates/steps/comments.html',
            controller: 'CommentCtrl'
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
      .state('app.sync', {
      	cache: false,
        url: '/sync',
        views: {
          'menuContent': {
            templateUrl: 'templates/sync.html',
            controller: 'SyncCtrl'
          }
        }
      });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/list');
  });
