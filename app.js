(function () {
  'use strict';

  weddingPageConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
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
  }

})();

(function () {
  IndexController.$inject = ["$scope"];
  angular.module('weddingPage')
         .controller('indexController', IndexController);

  function IndexController ($scope) {
    var vm = this;

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      vm.currentTab = (toState.data) ? toState.data.selectedTab : 0;
    });
  }
})();
(function () {
  angular.module('weddingPage')
         .controller('padrinhosController', PadrinhosController);

  function PadrinhosController () {
    var vm = this;
    var defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pharetra ipsum. Sed tempus eu justo sed commodo. Suspendisse condimentum in ante et aliquam. Morbi suscipit pulvinar nibh in viverra. Nulla lobortis felis et mi pulvinar laoreet. Mauris eget lorem egestas, elementum felis quis, suscipit eros. Maecenas nec varius nulla, eu faucibus diam.';

    vm.padrinhos = [{
      name: 'Celso Peter e Cecília Mara',
      description: defaultText,
      class: 'celso-ceci',
      rightAligned: true
    },{
      name: 'Paula Botelho e Thiago Lins',
      description: defaultText,
      class: 'paula-thi',
      rightAligned: false
    },{
      name: 'Kathy Prates e Rafael Manso',
      description: defaultText,
      class: 'katy-rafael',
      rightAligned: true
    },{
      name: 'Leonardo Cabral e Lilia Finelis',
      description: defaultText,
      class: 'leo-li',
      rightAligned: false
    },{
      name: 'Thiago Dutra e Mayte Balarini',
      description: defaultText,
      class: 'tiago-mayte',
      rightAligned: true
    },{
      name: 'Raphael Villani',
      description: defaultText,
      class: 'villani',
      rightAligned: false
    },{
      name: 'Guilherme Chediack',
      description: defaultText,
      class: 'chediack',
      rightAligned: true
    },{
      name: 'Anna Gusmão',
      description: defaultText,
      class: 'anna',
      rightAligned: false
    },{
      name: 'Patricia Rodrigues',
      description: defaultText,
      class: 'patricia',
      rightAligned: true
    },{
      name: 'Gabriel Gonçalves',
      description: defaultText,
      class: 'phelps',
      rightAligned: false
    },{
      name: 'Samara Horta',
      description: defaultText,
      class: 'samara',
      rightAligned: true
    },{
      name: 'Paolo Conti',
      description: defaultText,
      class: 'paolo',
      rightAligned: false
    }];
    
  }
})();