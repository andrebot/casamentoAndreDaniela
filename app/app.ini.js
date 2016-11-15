(function () {
  'use strict';

  var dependencies = ['ngMaterial',
                      'ui.router'];

  angular.module('weddingPage', dependencies)
    .config(weddingPageConfig);

  function weddingPageConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      url: '/',
      controller: 'indexController',
      controllerAs: 'vm',
      templateUrl: 'views/index.html'
    })
    .state('index.padrinhos', {
      url: 'padrinhos',
      data: {
        'selectedTab': 2
      },
      views: {
        'padrinhos': {
          controller: 'padrinhosController',
          controllerAs: 'vm',
          templateUrl: 'views/padrinhos.html'
        }
      }
    })
    .state('index.casal', {
      url: 'casal',
      data: {
        'selectedTab': 1
      },
      views: {
        'casal': {
          controller: 'casalController',
          controllerAs: 'vm',
          templateUrl: 'views/casal.html'
        }
      }
    })
  }

})();
