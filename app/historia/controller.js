(function () {
  angular.module('weddingPage')
         .controller('historiaController', HistoriaController);

  function HistoriaController ($mdDialog, $sce) {
    var vm = this;
    vm.showAlert = function (event, index) {
      var marco = vm.marcos[index];

      if (   navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)) {

        $mdDialog.show({
          targetEvent: event,
          controller: DialogController,
          template:
           '<md-dialog aria-label="History Dialog">' +
           '  <md-dialog-content>'+
           '    <div class="md-dialog-content">' +
           '      <h2 class="md-title">'+
                    marco.title +
           '      </h2>'+
           '      <p>' +
                    marco.text +
           '      </p>' +
           '    </div>' +
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      ok' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
        })
      }
    }
  
    vm.marcos = [{
      text: $sce.trustAsHtml('Tudo começou em uma aula de Kung Fu - arte marcial que ambos praticam há aproximadamente 8 anos - quando, em um belo dia, André foi fazer um treino na academia onde Daniela treinava. Ela com seu jeito tímido/bravo e ele com seu jeito tranquilo/brincalhão jamais imaginariam que um dia iriam se relacionar e, quiça, se casar! Posso dizer, inclusive, que um bom tempo se passou até que os dois ficassem amigos.'),
      title: 'Onde Tudo Começou',
      class: 'dani-andre-kungfu',
      isRight: true,
      isLeft: false,
    },{
      text: $sce.trustAsHtml('A amizade entre eles se fortaleceu durante os treinos nos quais Daniela participava quando estava de férias da faculdade e, a partir daí, eles continuaram a se encontrar em alguns eventos realizados pela escola de kung fu e também em encontros organizados pela própria turma. Houve até um incidente em um sítio onde André recitou uma cantada ridícula para a Daniela - <a target="_blank" href="https://video-ord1-1.xx.fbcdn.net/v/t42.1790-2/1298585_10200896624512307_19401_n.mp4?efg=eyJybHIiOjgwMSwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoibGVnYWN5X3NkIn0%3D&rl=801&vabr=445&oh=b5015cd8f4fcaf2e22a4f5ad8b93fb0e&oe=5840F4B2">video</a> - e que, apesar de não ter rolado nada naquele dia (ainda mais com aquela cantada!), no fundo, no fundo, André tem certeza que a conquistou ali!'),
      title: 'Apenas Amigos',
      class: 'stone',
      isRight: false,
      isLeft: true,
    },{
      text: $sce.trustAsHtml('Depois de alguns meses, André finalmente tomou coragem e, após retornar de um campeonato em SP, a convidou para sair em um encontro "inocente". A ideia era sair para comer um bolo de (muito) chocolate e colocar o papo em dia. Entretanto, vendo que o encontro estava indo bem, André, cheio de segundas intenções, convidou Daniela para ir à uma pizzaria (chamada Vinicius) super charmosa, com pizzas deliciosas e um ambiente romântico. Lá, podemos dizer que "a porra ficou séria" e o casal vivenciou seu primeiro beijo!'),
      title: 'Clima Esta no Ar',
      class: 'vinicius',
      isRight: true,
      isLeft: false,
    },{
      text: $sce.trustAsHtml('Um mês depois do primeiro beijo, no dia 1/5/12, após uma festa de aniversário de um dos amigos dos noivos, André levou Daniela para casa e, mesmo após uma noite agitada escutando rock, ambos decidiram ficar mais um tempinho juntos na portaria do prédio da Daniela. Foi ai que, tomado por uma vontade de fazer as coisas acontecerem, André pediu Daniela em namoro, oficialmente, no dia doidemai de 2012.'),
      title: 'Oficial',
      class: 'garagem-caza',
      isRight: false,
      isLeft: true,
    },{
      text: $sce.trustAsHtml('Desde então o casal vem saindo, crescendo, aprendendo, brigando, fazendo as pazes, viajando... enfim, construindo um relacionamento juntos. Foram vários acontecimentos que a fizeram com que o casal se conhecesse melhor e resultaram na relação que possuem hoje: uma relação pautada em companheirismo, sinceridade e amor. Foram quase 4 anos até que André decidisse dar um passo adiante e pedir Daniela em casamento.'),
      title: 'Desenrolar do Namoro',
      class: 'dani-lego',
      isRight: true,
      isLeft: false,
    },{
      text: $sce.trustAsHtml('Após 3 anos e meio de relacionamento, em Dez de 2015, André começou a bolar um plano que iria mudar a vida do casal! Aproveitado de suas FANTÁSTICAS habilidades de programador, André criou um site (com uma espécie de gincana) para que Daniela seguisse diversas pistas - que estavam com seus amigos e familiares mais próximo - e desvendasse várias charadas para que enfim recebesse o seu prêmio final: o pedido de casamento no dia em que os dois estavam completando os exatos 4 anos de namoro. Ele tinha planejado tudo cuidadosamente para que sua futura noiva passasse um dia inteiro brincando e se divertindo com o momento.'),
      title: 'A Preparação',
      class: 'site',
      isRight: false,
      isLeft: true,
    },{
      text: $sce.trustAsHtml('Então, quando o dia 2 de Maio de 2016 chegou, no aniversário de namoro do casal, André acordou cedo, ligou para Daniela e a brincadeira começou! É claro, como os mais astutos de vocês já pensaram, Daniela conseguiu acabar com o jogo inteiro em menos de 3 horas!, recebendo, no final da brincadeira, um aviso de que seu namorado iria levá-la para jantar e, sem que ela desconfiasse, André a levou para o mesmo restaurante onde o casal teve seu primeiro encontro e lá a pediu em casamento!'),
      title: 'O Pedido!',
      class: 'pedido-casamento',
      isRight: true,
      isLeft: false,
    }, {
      text: $sce.trustAsHtml('O pediu resultou neste exato momento: a espera ansiosa pelo dia 28 de Abril de 2017! O casamento será celebrado na presença de Deus na Paróquia Santo Inácio de Loyola localizada na cidade de Belo Horizonte/Minas Gerais.'),
      title: 'O Dia',
      class: 'igreja',
      isRight: false,
      isLeft: true
    }];
  }

  function DialogController($scope, $mdDialog) {
    $scope.closeDialog = function() {
      $mdDialog.hide();
    }
  }

})();
