(function () {
  angular.module('weddingPage')
         .controller('historiaController', HistoriaController);

  function HistoriaController ($mdDialog) {
    var vm = this;
    vm.showAlert = function (event, index) {
      var marco = vm.marcos[index];
      

      if (navigator.userAgent.match(/Android/i)
           || navigator.userAgent.match(/webOS/i)
           || navigator.userAgent.match(/iPhone/i)
           || navigator.userAgent.match(/iPad/i)
           || navigator.userAgent.match(/iPod/i)
           || navigator.userAgent.match(/BlackBerry/i)
           || navigator.userAgent.match(/Windows Phone/i)) {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title(marco.title)
            .textContent(marco.text)
            .ok('ok')
            .targetEvent(event)
        )
      }
    }
  
    vm.marcos = [{
      text: 'Pois bem, tudo começou, por incrível que pareça, em uma aula de Kung Fu. Ambos são alunos do mesmo instrutor, que dava aula na academia Tropical, no Coração Eucarístico, e na academia Body Art, no Santa Lúcia. Um dia o André foi fazer um treino na academia Tropical e assim o casal se conheceu.',
      title: 'Onde Tudo Começou',
      class: 'dani-andre-kungfu',
      isRight: true,
      isLeft: false,
    },{
      text: 'Tempo vai, tempo vem e eles continuaram a se encontrar, mas por causa de encontros feitos pela própria turma de Kung Fu. Houve bares, partidas de Rock Band na casa do Leandro, seminário de Tui Na... houve até um incidente em um sítio onde André recitou uma cantada ridícula para a Daniela. Podemos parafrasea-la aqui: "Asa de morcego, asa de galinha, se você quiser ficar comigo, da uma risadinha!". Não preciso dizer que não rolou nada nesse dia, ainda mais com essa cantada. Mas a Daniela deu sim uma risadinha!',
      title: 'Apenas Amigos',
      class: 'stone',
      isRight: false,
      isLeft: true,
    },{
      text: 'Depois de alguns meses se conhecendo, André finalmente toma coragem. Após retornar de um campeonato de Kung Fu em São Paulo, ele convida Daniela para sair com ele, em um encontro inocente. A ideia era sair para comer um bolo na Fany do Ponteio Lar Shopping. O encontro aconteceu. O bolo foi ótimo. Contudo a noite não acabou ali. Cheio de segundas intenções, e vendo que tudo estava indo bem, André convidou Daniela para ir à uma pizzaria na Pium-í, chamada Vinicius. Essa era uma pizzaria charmosa, com pizzas deliciosas e um ambiente romântico. Lá, podemos dizer que a porra ficou séria e o casal vivenciou seu primeiro beijo!',
      title: 'Clima Esta no Ar',
      class: 'vinicius',
      isRight: true,
      isLeft: false,
    },{
      text: 'Vamos avançar um mês depois disso. Dia 1 de Março de 2012. Após uma agitada festa no bar Garagem de Caza, onde comemoramos o aniversário de um dos padrinhos, Paolo Conti, André leva a Daniela para casa. Ambos cansados depois de uma noitada escutando rock. Mesmo assim ambos decidem ficar mais um tempinho juntos, na portaria da casa da Daniela, para aproveitarem um momento juntos. Foi ai que, tomado por uma vontade de fazer as coisas acontecerem, que André pede Daniela em namoro, logo depois de meia noite, oficialmente 2 de Maio de 2012. Foi o começo de toda a história que ambos iriam construir.',
      title: 'Oficial',
      class: 'garagem-caza',
      isRight: false,
      isLeft: true,
    },{
      text: 'Desde então o casal vem saindo, crescendo, aprendendo, brigando, fazendo as pazes, viajando... enfim, vivendo juntos. Foram vários acontecimentos que adoraríamos contar aqui, mas simplesmente não há espaço. Acho que basta dizer que, durante quatro anos, eles ficaram muito próximos. Muitas coisas aconteceram. Foram momentos inesquecíveis para os dois, posso garantir.',
      title: 'Desenrolar do Namoro',
      class: 'dani-lego',
      isRight: true,
      isLeft: false,
    },{
      text: 'Quatro anos se passaram. Pois é, quatro anos. Foi muito rápido! Mas flizmente os dois ainda estavam bem enamorados. Por conta disso, André começa a bolar um plano. Em dezembro de 2015 ele começa a arquitetar a noite que iria mudar a vida do casal. Aproveitado de suas fantáticas habilidades de programador, André cria um site para que Daniela. Mas não um site qualquer. Era um jogo! André, junto com os amigos mais próximos de Daniela e os pais dela, bolaram uma gincana, onde Daniela tinha que seguir pistas que estavam no site e desvendar charadas para conseguir seguir para a próxima etapa. Ele tinha planejado tudo cuidadosamente, para com que Daniela passasse um dia inteiro brincando. Então, quando o dia 2 de Maio de 2016 chegou, no aniversário de namoro do casal, André acorda cedo, liga para Daniela e a brincadeira começa! É claro, como os mais astustos de vocês já pensaram, Daniela conseguiu acabar com o jogo inteiro em menos de 3 horas! Ahahahaha, e lá se vai parte do planejamento do André. Mas tudo bem, ainda sim ela se divertiu. E no final da brincadeira, Daniela recebe um aviso de que seu namorado iria leva-la para jantar. Sem saber, André a leva para o restaurante onde o casal teve seu primeiro encontro, e lá a pede em casamento!',
      title: 'O Pedido!',
      class: 'pedido-casamento',
      isRight: false,
      isLeft: true,
    }, {
      text: 'Culminando nesse exato momento. Levando você a ler este site e à esperada data 28 de Abril de 2017. Celebraremos nosso casamento na Paróquia Santo Inácio de Loyola, no bairro Cidade Jardim.',
      title: 'O Dia',
      class: 'igreja',
      isRight: true,
      isLeft: false
    }];
  }
})();
