(function () {
  'use strict';

  weddingPageConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
  var dependencies = ['ngMaterial',
                      'ngMessages',
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
    .state('index.casal', {
      url: 'casal',
      data: {
        'selectedTab': 2
      },
      views: {
        'casal': {
          controller: 'casalController',
          controllerAs: 'vm',
          templateUrl: 'views/casal.html'
        }
      }
    })
    .state('index.padrinhos', {
      url: 'padrinhos',
      data: {
        'selectedTab': 3
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
        'selectedTab': 5
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
  RSPVController.$inject = ["$mdDialog", "$scope"];
  angular.module('weddingPage')
         .controller('RSPVController', RSPVController);

  function RSPVController ($mdDialog, $scope) {
    var vm = this;
    vm.isLoading = false;

    vm.convidado = {
      nome: '',
      email: '',
      pessoas: 0
    };

    vm.submit = function () {
      var fireRef = firebase.database().ref();
      vm.isLoading = true;

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

        vm.isLoading = false;
      }).catch(function () {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Erro na Confirmação')
            .textContent('Me desculpe, mas houve um erro quando tentamos confirmar sua presença. Será que você poderia tentar de novo mais tarde?')
            .ok('ok')
        );

        vm.isLoading = false;
      });
    }
  }
})();

(function () {
  CasalController.$inject = ["$scope"];
  angular.module('weddingPage')
         .controller('casalController', CasalController);

  function CasalController ($scope) {
    var vm = this;
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

      if (   navigator.userAgent.match(/Android/i)
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
        );
      }
    }
  
    vm.marcos = [{
      text: 'Tudo começou em uma aula de Kung Fu - arte marcial que ambos praticam há aproximadamente 8 anos - quando, em um belo dia, André foi fazer um treino na academia onde Daniela treinava. Ela com seu jeito tímido/bravo e ele com seu jeito tranquilo/brincalhão jamais imaginariam que um dia iriam se relacionar e, quiça, se casar! Posso dizer, inclusive, que um bom tempo se passou até que os dois ficassem amigos.',
      title: 'Onde Tudo Começou',
      class: 'dani-andre-kungfu',
      isRight: true,
      isLeft: false,
    },{
      text: 'A amizade entre eles se fortaleceu durante os treinos nos quais Daniela participava quando estava de férias da faculdade e, a partir daí, eles continuaram a se encontrar em alguns eventos realizados pela escola de kung fu e também em encontros organizados pela própria turma. Houve até um incidente em um sítio onde André recitou uma cantada ridícula para a Daniela - ver link - e que, apesar de não ter rolado nada naquele dia (ainda mais com aquela cantada!), no fundo, no fundo, André tem certeza que a conquistou ali!',
      title: 'Apenas Amigos',
      class: 'stone',
      isRight: false,
      isLeft: true,
    },{
      text: 'Depois de alguns meses, André finalmente tomou coragem e, após retornar de um campeonato em SP, a convidou para sair em um encontro "inocente". A ideia era sair para comer um bolo de (muito) chocolate e colocar o papo em dia. Entretanto, vendo que o encontro estava indo bem, André, cheio de segundas intenções, convidou Daniela para ir à uma pizzaria (chamada Vinicius) super charmosa, com pizzas deliciosas e um ambiente romântico. Lá, podemos dizer que "a porra ficou séria" e o casal vivenciou seu primeiro beijo!',
      title: 'Clima Esta no Ar',
      class: 'vinicius',
      isRight: true,
      isLeft: false,
    },{
      text: 'Um mês depois do primeiro beijo, no dia 1/5/12, após uma festa de aniversário de um dos amigos dos noivos, André leva Daniela para casa e, mesmo após uma noite agitada escutando rock, ambos decidem fica mais um tempinho juntos na portaria do prédio da Daniela. Foi ai que, tomado por uma vontade de fazer as coisas acontecerem, André pediu Daniela em namoro, oficialmente, no dia doidemai de 2012.',
      title: 'Oficial',
      class: 'garagem-caza',
      isRight: false,
      isLeft: true,
    },{
      text: 'Desde então o casal vem saindo, crescendo, aprendendo, brigando, fazendo as pazes, viajando... enfim, construindo um relacionamento juntos. Foram vários acontecimentos que a fizeram com que o casal se conhecesse melhor e resultaram na relação que possuem hoje: uma relação pautada em companheirismo, sinceridade e amor. Foram quase 4 anos até que André decidisse dar um passo adiante e pedir Daniela em casamento.',
      title: 'Desenrolar do Namoro',
      class: 'dani-lego',
      isRight: true,
      isLeft: false,
    },{
      text: 'Após 3 anos e meio de relacionamento, em Dez de 2015, André começou a bolar um plano que iria mudar a vida do casal! Aproveitado de suas FANTÁSTICAS habilidades de programador, André criou um site (com uma espécie de gincana) para que Daniela seguisse diversas pistas - que estavam com seus amigos e familiares mais próximo - e desvendasse várias charadas para que enfim recebesse o seu prêmio final: o pedido de casamento no dia em que os dois estavam completando os exatos 4 anos de namoro. Ele tinha planejado tudo cuidadosamente para que sua futura noiva passasse um dia inteiro brincando e se divertindo com o momento.',
      title: 'A Preparação',
      class: 'site',
      isRight: false,
      isLeft: true,
    },{
      text: 'Então, quando o dia 2 de Maio de 2016 chegou, no aniversário de namoro do casal, André acordou cedo, ligou para Daniela e a brincadeira começou! É claro, como os mais astutos de vocês já pensaram, Daniela conseguiu acabar com o jogo inteiro em menos de 3 horas! No final da brincadeira, Daniela recebeu um aviso de que seu namorado iria levá-la para jantar e, sem que ela desconfiasse, André a levou para o restaurante onde o casal teve seu primeiro encontro e lá a pediu em casamento!',
      title: 'O Pedido!',
      class: 'pedido-casamento',
      isRight: true,
      isLeft: false,
    }, {
      text: 'O pediu resultou neste exato momento: a espera ansiosa pelo dia 28 de Abril de 2017! O casamento será celebrado na presença de Deus na Paróquia Santo Inácio de Loyola localizada na cidade de Belo Horizonte/Minas Gerais.',
      title: 'O Dia',
      class: 'igreja',
      isRight: false,
      isLeft: true
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
      description: 'Amizade que começou na faculdade e que se fortificou ainda mais com o passar do tempo. Ciça era minha parceira de trabalhos e estudos na sala de aula, minha dupla, e o Peter era aquele cara que sempre queria roubar minha dupla com a justificativa de que ela era namorada dele (rs). Cada um com seu jeito de ser, ela com uma paciência infindável (meta de vida!!!) e ele com o jeito brincalhão e divertido, me ensinaram várias coisas sobre relacionamento que eles nem imaginam..',
      filiacao: 'Amigos da Noiva',
      class: 'celso-ceci',
      rightAligned: true
    },{
      name: 'Paula Botelho e Thiago Lins',
      description: 'É mais do que óbvio que esse casal estaria aqui! Paula é minha irmã de sangue e de coração. Infelizmente, quando morávamos juntos eu a enlouquecia! Tocava violão às 23hrs, gritava no meu quarto quando estava jogando no computador, escutava televisão em um volume muito alto pra ela... ou seja, fazia de tudo para perturbar a paz que ela tinha em casa. Mas, contudo, porém, entretanto, todavia.. ainda assim conseguimos ter espaços nos nossos corações para compatilhar um amor só nosso (mesmo que eu suma de vez enquando, viu, Paula?!). Thiago foi aquele cara cabeludo e de camisa hippie que apareceu lá em casa uma vez. Eu lembro até hoje você me pedindo pra ver o GTA Vice City que eu estava jogando naquela hora. Pois bem, o Thiago conseguiu mais do que meu respeito demonstrando um crescimento incrível com o passar dos anos.. sem contar no carinho com minha irmã - que já presenciel inúmeras vezes. Por isso, esses dois possuem um lugar especial!',
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
      filiacao: 'Amigos do casal',
      class: 'leo-li',
      rightAligned: false
    },{
      name: 'Thiago Dutra e Mayte Balarini',
      description: 'Thigo é o exemplo daquele primo que se encaixa perfeitamente no perfil de irmão. Aquele que, por mais que encha sua paciência, você admira e quer que participe de todos os momentos da sua vida. Maytê, esposa de Thiago, entrou na nossa relação (rs!) e se encaixou perfeitamente. Divertida, inteligente... é um exemplo de pessoa tranquila e dedicada. Ela, juntamente com Thiago, são, e sempre serão, meus parceiros de praia, de férias, de conselhos e de zuação. ',
      filiacao: 'Família da Noiva',
      class: 'tiago-mayte',
      rightAligned: true
    },{
      name: 'Raphael Villani',
      description: 'Freak (zoid)! Isso define bem o Rapha. Lembro-me de quando minha mãe falou: "André, hoje vou te apresentar o filho do Adriano, Raphael". A única coisa que passava na minha cabeça era: "Nossa, só falta ser um boyzinho chato pra caramba!". Mas, pra minha sorte, apareceu um nerd fissurado em RPG, anime e coisas idiotas (que coincidência!!) e que é (isso mesmo, no presente) completamente insano. Vivenciei várias experiências bizaras com ele, como, por exemplo: quando por um momento eu era miope; a foto de menos que uma década; invasão de um quarto a dois andares de altura escalando pela sacada do prédio... Pois é, mas, apesar de tudo, ele sempre foi brother. Companheiro de RPG, animes e viajens! Tenho muita satisfação quando alguém me pergunta quem é o Raphael e eu digo: "É o meu irmão!".',
      filiacao: 'Família do Noivo',
      class: 'villani',
      rightAligned: false
    },{
      name: 'Guilherme Chediack',
      description:'Chedda Miagui é um amigo das antigas. Posso dizer, inclusive, que é um dos meus melhores amigos. Nossa amizade começou quando ele foi de penetra na minha festa de 15 anos.. ele, que é 2 anos mais velho que eu, acabou se tornando um amigo para todas as horas, parceiro de inúmeras histórias, de shows de Nei Cobain, de diversas sessões de guitar hero na casa do HC..alguém que eu sei que sempre posso contar e que está ao meu lado em qualquer situação.',
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
      description: 'Patrícia é a minha prima mais velha por parte de pai e, quando eu nasci, ela queria roubar todos meus brinquedos e presentes (rs)! Mas, passada essa fase de trombadinha dela (rs), acabamos desenvolvendo uma amizade sincera, partilhando alguns altos e baixos, algumas vergonhas alheias (rs) e diversos conselhos (eu dei mais conselho do que ela, claro! rs). Hoje, com toda certeza, posso dizer que sempre estaremos presente uma na vida da outra!',
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
      description: 'Gabriela é aquela prima que fazia você passar vergonha todo santo domingo que ia almoçar na casa da sua avó, pois ela inventava umas apresentações de ballet onde todas as primas (ela, eu, Carol e Paty) precisávamos "dançar" para toda família (Gabi, eu te odiava de todo meu coração (rs)). Graças a Deus essa fase passou, ela se tornou uma pessoa normal (rs) e a gente desenvolveu uma amizade sincera. Hoje, ela é uma das pessoas que mais considero e que, com certeza, fará parte de todos os momentos da minha vida!',
      filiacao: 'Família da Noiva',
      class: 'gabi',
      rightAligned: true
    }];
    
  }
})();