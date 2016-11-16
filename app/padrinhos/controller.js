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