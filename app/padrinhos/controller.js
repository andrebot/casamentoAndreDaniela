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
      description: 'É mais do que óbvio que esse casal estaria aqui! Paula é minha irmã de sangue e de coração. Infelizmente, quando morávamos juntos eu a enlouquecia! Tocava violão às 23hrs, gritava no meu quarto quando estava jogando no computador, escutava televisão em um volume muito alto pra ela... ou seja, fazia de tudo para perturbar a paz que ela tinha em casa. Mas, contudo, porém, entretanto, todavia.. ainda assim conseguimos ter espaços nos nossos corações para compatilhar um amor só nosso (mesmo que eu suma de vez enquando, viu, Paula?!). Thiago foi aquele cara cabeludo e de camisa hippie que apareceu lá em casa uma vez. Eu lembro até hoje você me pedindo pra ver o GTA Vice City que eu estava jogando naquela hora. Pois bem, o Thiago conseguiu mais do que meu respeito demonstrando um crescimento incrível com o passar dos anos.. sem contar no carinho com minha irmã - que já presenciei inúmeras vezes. Por isso, esses dois possuem um lugar especial!',
      filiacao: 'Família do Noivo',
      class: 'paula-thi',
      rightAligned: false
    },{
      name: 'Kathy Prates e Rafael Manso',
      description: 'Sabe aquela pessoa que o "santo bate" logo de cara? Então, foi assim que a minha amizade com a Kathy começou. Jamais imaginei que fosse conhecer uma pessoa com o gênio 10% pior que o meu (rs) e que ainda fosse capaz de me compreender tão bem. Já o Rafa, também conhecido como bombeirão (rs), é o oposto de nós duas. Calmo, paciente... deve ser por isso que ele deu certo com a Kathy, viraram meus afilhados de casamento e hoje formam uma família linda!',
      filiacao: 'Amigos do Casal',
      class: 'katy-rafael',
      rightAligned: true
    },{
      name: 'Leonardo Cabral e Lilia Finelli',
      description: 'Caramba! Como que eu posso descrever essa amizade? Conheci o Léo no colégio (onde tudo era mais fácil) por volta da 6ª série do fundamental, mas ficamos amigos mesmo no ensino médio. Lembro-me, inclusive, que por minha culpa a gente levou zero na prova de inglês (foi mal, Leo!). Parceiro de jogos, almoços no intervalo entre as aulas dos turnos manhã e tarde, e bagunça nas festas na casa do Jesus. Já a Li, que hoje é esposa do Léo, eu também conheci nessa mesma época, mas por causa dele já que eles começaram a namorar e, desde então, ela sempre estava com a gente! Uma menina com opinião sincera e comentários certeiros. Um casal nota mil e que desejo o melhor sempre. Ah sim, não posso deixar de comentar que foi por causa do Leo que comecei com Kung Fu! Ou seja, ele também tem uma certa responsabilidade sobre tudo isso, hahaha!',
      filiacao: 'Amigos do casal',
      class: 'leo-li',
      rightAligned: false
    },{
      name: 'Thiago Dutra e Mayte Balarini',
      description: 'Thiga é o exemplo daquele primo que se encaixa perfeitamente no perfil de irmão. Aquele que, por mais que encha sua paciência, você admira e quer que participe de todos os momentos da sua vida. Maytê, esposa de Thiago, entrou na nossa relação (rs!) e se encaixou perfeitamente. Divertida, inteligente... é um exemplo de pessoa tranquila e dedicada. Ela, juntamente com Thiago, são, e sempre serão, meus parceiros de praia, de férias, de conselhos e de zuação. ',
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
      description: 'Prima birutinha! Anna sempre foi a prima travessa da família. Sempre energética e de sorriso fácil, ela é um exemplo de pessoa de bom coração e esforçada. A Anna, para mim, é uma prova de que podemos sim estar sempre alegres e de bom humor independente do que seja. E essa sensação que eu gostaria de nunca perder. Dessa forma, gostaria muito que você, Anna, trouxesse essa energia positiva para mim e Daniela, agraciando nossa união.',
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
      description: 'Esse aqui foi o meu primeiro amigo mesmo no Pitágoras. Conheci o Gabriel quando estávamos na 4ª série do ensino fundamental. Companheiro de Magic no meio da aula, matadas de aula, invasão da capelinha entre outras coisas. Foi uma amizade que, nem mesmo quando saímos na mão um contra o outro, mudou (apesar de eu ter sido estritamente proibido pelo meu pai de ver o Gabriel de novo... pois é, pai, se você esta lendo isso aqui, eu ignorei essa regra sumariamente! Hahahaha Não fique bravo!). Essa é uma daquelas amizades de infância que dura pra vida inteira. Podemos ficar meses sem entrar em contato um com outro, mas, sempre que encontramos, sei que nossa amizade não irá terminar. Muito obrigado por ser meu brother por todos esses anos!',
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
      description: 'Paolo é umas das pessoas mais atípicas que eu conheço (mesmo eu tendo falado isso de quase todos os nossos padrinhos hahaha). Paolo foi meu colega de basquete e jogávamos juntos no colégio. Mas foi no cursinho para o vestibular, quando estávamos tentando pela segunda vez entrar em uma faculdade, que a gente deu mais certo. Éramos da mesma sala e, como a gente já se conhecia, acabou que convivíamos todos os dias e não podia ter dado mais certo. É um cara que possui uma preocupação sincera com seus amigos e entes queridos. Cara, valeu por todas as vezes que você esteve presente quando eu precisava!!',
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