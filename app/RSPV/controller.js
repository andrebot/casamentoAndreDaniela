(function () {
  angular.module('weddingPage')
         .controller('RSPVController', RSPVController);

  function RSPVController () {
    var vm = this;

    vm.convidado = {
      nome: '',
      email: '',
      pessoas: 0
    };

    vm.submit = function () {
      var fireRef = firebase.database().ref();

      fireRef.push().set(vm.convidado).then(function () {
        // show thumbs up
      }).catch(function () {
        // error message
      });
    }
  }
})();