(function () {
  angular.module('weddingPage')
         .controller('indexController', IndexController);

  function IndexController ($scope) {
    var vm = this;

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      vm.currentTab = (toState.data) ? toState.data.selectedTab : 0;
    });
  }
})();