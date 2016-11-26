(function () {
  'use strict';

  weddingPageConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
  var dependencies = ['ngMaterial',
                      'ui.router'];

  angular.module('weddingPage', dependencies)
    .config(weddingPageConfig);

  function weddingPageConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    var apiKey = 'AIzaSyB_dMEBT5lOT8BQlaPA5HRez0ZMWQln_3s';
    var databaseURL = 'https://weddingsite-a7b7e.firebaseio.com';

    firebase.initializeApp({
      apiKey,
      databaseURL
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      url: '/',
      controller: 'indexController',
      controllerAs: 'vm',
      templateUrl: 'views/index.html'
    })
    .state('index.historia', {
      url: 'historia',
      data: {
        'selectedTab': 1
      },
      views: {
        'historia': {
          controller: 'historiaController',
          controllerAs: 'vm',
          templateUrl: 'views/historia.html'
        }
      }
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
    .state('index.rspv', {
      url: 'rspv',
      data: {
        'selectedTab': 4
      },
      views: {
        'rspv': {
          controller: 'RSPVController',
          controllerAs: 'vm',
          templateUrl: 'views/rspv.html'
        }
      }
    });
  }

})();

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

      fireRef.push().set(vm.convidado);
    }
  }
})();
(function () {
  HistoriaController.$inject = ["$mdDialog"];
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
      description: 'Amizade que começou na faculdade e que se fortificou ainda mais com o passar do tempo. Ciça era minha parceira de trabalhos e estudos na sala de aula, minha dupla, e o Pter era aquele cara que queria sempre roubar minha dupla com a justificativa de que ela era namorada dele. (rs)Cada um com seu jeito de ser, ela com uma paciência infindável (meta de vida!!!) e ele com o jeito brincalhão e divertido, me ensinaram várias coisas sobre relacionamento e que eles nem imaginam.. de modo que antes eles eram meus afilhados de casamento e agora se tornarão nossos padrinhos de casamento.',
      filiacao: 'Amigos da Noiva',
      class: 'celso-ceci',
      rightAligned: true
    },{
      name: 'Paula Botelho e Thiago Lins',
      description: 'É mais do que óbvio que esse casal estaria aqui! Paula é minha irmã de sangue e de coração. Infelizmente, quando morávamos juntos, eu a enlouquecia! Tocava violão as 23hrs, gritava no meu quarto quando estava jogando no meu computador, escutava televisão em um volume muito alto pra ela... ou seja, fazia de tudo para perturbar a paz da qual ela tinha em casa. Mas, contudo, porém, entretanto, todavia, ainda sim conseguimos ter espaços nos nossos corações para compatilhar um amor só nosso (mesmo que eu suma de vez enquando viu Paula?). Thiago foi aquele cara cabeludo e de camisa hippie que apareceu lá em casa uma vez. Eu lembro até hoje você me pedindo pra ver o GTA Vice City que eu estava jogando naquela hora. Pois bem, o Thiago conseguiu mais do que meu respeito demonstrando um crescimento incrível no passar dos anos, sem contar no carinho com minha irmã do qual já presenciel inumeras vezes. Por isso os dois possuem um lugar especial!',
      filiacao: 'Família do Noivo',
      class: 'paula-thi',
      rightAligned: false
    },{
      name: 'Kathy Prates e Rafael Manso',
      description: 'Sabe aquela pessoa que o "santo bate" logo de cara? Então, foi assim que a minha amizade com a Kathy começou. Jamais imaginei que fosse conhecer uma pessoa com o gênio 10% pior que o meu (rs) e que ainda fosse capaz de me compreender tão bem. Já o Rafa, também conhecido como bombeirão (rs), é o oposto de nós duas. Calmo, paciente... deve ser por isso que ele deu certo com a Kathy, viraram meus afilhados de casamento e hoje formam uma família linda!',
      filiacao: 'Amigos da Noiva',
      class: 'katy-rafael',
      rightAligned: true
    },{
      name: 'Leonardo Cabral e Lilia Finelli',
      description: 'Caramba! Como que eu posso descrever essa amizade? Nos conhecemos no colégio, onde tudo era mais fácil. Mas a gente se conectou mesmo foi no ensino médio.',
      filiacao: 'Amigos do Noivo',
      class: 'leo-li',
      rightAligned: false
    },{
      name: 'Thiago Dutra e Mayte Balarini',
      description: 'Thigo é o exemplo daquele primo que se encaixa perfeitamente no perfil de irmão, aquele que, por mais que encha sua paciência, você admira e quer que participe de todos os momentos da sua vida. Maytê, esposa de Thiago, entrou na nossa relação (rs!) e se encaixou perfeitamente. Divertida, inteligente... é um exemplo de pessoa tranquila e dedicada. Ela, juntamente com Thiago, são, e sempre serão, meus parceiros de praia, de férias, de conselhos e de zuação. ',
      filiacao: 'Família da Noiva',
      class: 'tiago-mayte',
      rightAligned: true
    },{
      name: 'Raphael Villani',
      description: 'Freak (zoid)! Isso define bem o Rapha. Lembro-me de quando minha mãe falou: "André, hoje vou te apresentar o filho do Adriano, Raphael". A única coisa que passava na minha cabeça era: "Nossa, só falta ser um boyzinho chato pra caramba!". Mas pra minha sorte apareceu um nerd, fissurado em RPG, anime e coisas idiotas (que coincidência) e que é (isso mesmo, no presente) completamente insano. Vivenciei várias experiências bizaras com ele, entre elas: quando por um momento eu era miope, a foto de menos que uma década, invasão de um quarto a dois andares de altura escalando pela sacada do prédio... Pois é, mas apesar de tudo ele sempre foi brother. Companheiro de RPG, animes e viajens, e tenho muito carinho quando alguém me pergunta quem é o Raphael e eu digo: "É o meu irmão".',
      filiacao: 'Família do Noivo',
      class: 'villani',
      rightAligned: false
    },{
      name: 'Guilherme Chediack',
      description: defaultText,
      filiacao: 'Amigo da Noiva',
      class: 'chediack',
      rightAligned: true
    },{
      name: 'Anna Gusmão',
      description: 'Prima pirutinha! Anna sempre foi a prima travessa da família.',
      filiacao: 'Família do Noivo',
      class: 'anna',
      rightAligned: false
    },{
      name: 'Patricia Rodrigues',
      description: defaultText,
      filiacao: 'Família da Noiva',
      class: 'patricia',
      rightAligned: true
    },{
      name: 'Gabriel Gonçalves',
      description: 'Esse aqui foi o meu primeiro amigo mesmo no Pitágoras. Conheci o Gabriel quando estávamos na quarta série do ensino fundamental. Companheiro de Magic no meio da aula, matadas de aula, invasão da capelinha, entre outras coisas. Foi uma amizade que, nem mesmo quando saimos na mão um contra o outro, mudou (apesar de eu ter sido estritamente proibido pelo meu pai de ver o Gabriel de novo... pois é pai, se você esta lendo isso aqui eu ignorei essa regra sumariamente, hahahaha, não fique bravo!). Essa é uma daquelas amizades de infância que dura pra vida inteira. Podemos ficar meses sem entrar em contato um com outro, mas sempre que encontramos sei que nossa amizade não irá terminar. Muito obrigado por ser meu brother por todos esses anos!',
      filiacao: 'Amigo do Noivo',
      class: 'phelps',
      rightAligned: false
    },{
      name: 'Samara Horta',
      description: 'A melhor descrição para a amizade da Sá pode ser dita através de uma citação de Carlos Drummond de Andrade "Fácil é ser colega, fazer companhia a alguém, dizer o que ele deseja ouvir. Difícil é ser amigo para todas as horas e dizer sempre a verdade quando for preciso. E com confiança no que diz".',
      filiacao: 'Amiga da Noiva',
      class: 'samara',
      rightAligned: true
    },{
      name: 'Paolo Conti',
      description: 'Paolo é umas das pessoas mais atípicas que eu conheço (mesmo eu ter falado que quase todos os nossos padrinhos são, hahaha). Paolo foi meu colega de basquete, jogávamos juntos no colégio, iamos a campeonatos. Sempre foi um cara descolado (mesmo com essa nareba). Mas foi no cursinho para o vestibular, quando estávamos tentando pela segunda vez entrar em uma faculdade, que a gente deu mais certo. Eramos da mesma sala, e como a gente se conhecia acabou que conviviamos todos os dias e não podia ter dado mais certo.',
      filiacao: 'Amigo do Noivo',
      class: 'paolo',
      rightAligned: false
    },{
      name: 'Gabriela Caldeira',
      description: defaultText,
      filiacao: 'Família da Noiva',
      class: 'gabi',
      rightAligned: true
    }];
    
  }
})();