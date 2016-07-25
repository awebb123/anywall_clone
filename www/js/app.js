angular.module('aw', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($urlRouterProvider, $stateProvider) {

  $stateProvider

    .state('/splash', {
      url: '/splash',
      templateUrl: './templates/pages/splash.html'
    })

    .state('/login', {
      url: '/login',
      templateUrl: './templates/pages/login.html'
    })

    .state('/signup', {
      url: '/signup',
      templateUrl: './templates/pages/signup.html'
    });

  $urlRouterProvider.otherwise('/splash');

});
