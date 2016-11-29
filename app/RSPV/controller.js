(function () {
  angular.module('weddingPage')
         .controller('RSPVController', RSPVController);

  function RSPVController ($mdDialog, $scope) {
    var vm = this;
    var loadingElement = angular.element(document.querySelector('#loading-holder'));

    vm.convidado = {
      nome: '',
      email: '',
      pessoas: 0
    };

    vm.submit = function () {
      var fireRef = firebase.database().ref();
      loadingElement.removeClass('hidden');

      fireRef.push().set(vm.convidado).then(function () {
        $mdDialog.show({
          clickOutsideToClose: true,
          controllerAs: 'dialog',
          controller: function () {
            this.hide = function () {
              $mdDialog.hide();
            }
          },
          template: '<md-dialog ng-class="dialog.css"><md-dialog-content class="md-dialog-content" role="document" tabIndex="-1"><h2 class="md-title">Presença Confirmada!</h2><div class="md-dialog-content-body"><div layout="row"><md-icon md-svg-src="/imgs/svgs/ic_thumb_up_48px.svg" flex></md-icon></div></div></md-dialog-content><md-dialog-actions><md-button ng-click="dialog.hide()" class="md-primary md-confirm-button">OK</md-button></md-dialog-actions></md-dialog>'
        }); 

        loadingElement.addClass('hidden');
      }).catch(function () {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Erro na Confirmação')
            .textContent('Me desculpe, mas houve um erro quando tentamos confirmar sua presença. Será que você poderia tentar de novo mais tarde?')
            .ok('ok')
        );

        loadingElement.addClass('hidden');
      });
    }
  }
})();
