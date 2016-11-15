(function () {
  angular.module('weddingPage')
         .controller('padrinhosController', PadrinhosController);

  function PadrinhosController () {
    var vm = this;
    var defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pharetra ipsum. Sed tempus eu justo sed commodo. Suspendisse condimentum in ante et aliquam. Morbi suscipit pulvinar nibh in viverra. Nulla lobortis felis et mi pulvinar laoreet. Mauris eget lorem egestas, elementum felis quis, suscipit eros. Maecenas nec varius nulla, eu faucibus diam.';

    vm.padrinhos = [{
      name: 'Celso Peter e Cecília Mara',
      description: 'Amizade que começou na faculdade e que se fortificou ainda mais com o passar do tempo. Ciça era minha parceira de trabalhos e estudos na sala de aula, minha dupla, e o Pter era aquele cara que queria sempre roubar minha dupla com a justificativa de que ela era namorada dele. (rs)Cada um com seu jeito de ser, ela com uma paciência infindável (meta de vida!!!) e ele com o jeito brincalhão e divertido, me ensinaram várias coisas sobre relacionamento e que eles nem imaginam.. de modo que antes eles eram meus afilhados de casamento e agora se tornarão nossos padrinhos de casamento.',
      class: 'celso-ceci',
      rightAligned: true
    },{
      name: 'Paula Botelho e Thiago Lins',
      description: defaultText,
      class: 'paula-thi',
      rightAligned: false
    },{
      name: 'Kathy Prates e Rafael Manso',
      description: 'Sabe aquela pessoa que o "santo bate" logo de cara? Então, foi assim que a minha amizade com a Kathy começou. Jamais imaginei que fosse conhecer uma pessoa com o gênio 10% pior que o meu (rs) e que ainda fosse capaz de me compreender tão bem. Já o Rafa, também conhecido como bombeirão (rs), é o oposto de nós duas. Calmo, paciente... deve ser por isso que ele deu certo com a Kathy, viraram meus afilhados de casamento e hoje formam uma família linda!',
      class: 'katy-rafael',
      rightAligned: true
    },{
      name: 'Leonardo Cabral e Lilia Finelli',
      description: defaultText,
      class: 'leo-li',
      rightAligned: false
    },{
      name: 'Thiago Dutra e Mayte Balarini',
      description: 'Thigo é o exemplo perfeito daquele primo que se encaixa perfeitamente no perfil de irmão, aquele que, por mais que encha sua paciência, você admira e quer que participe de todos os momentos da sua vida. Maytê, esposa de Thiago, entrou na nossa relação (rs!) e se encaixou perfeitamente. Divertida, inteligente... é um exemplo de pessoa tranquila e dedicada. Ela, juntamente com Thiago, são, e sempre serão, meus parceiros de praia, de férias, de conselhos e de zuação. ',
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
      description: 'A melhor descrição para a amizade da Sá pode ser dita através de uma citação de Carlos Drummond de Andrade "Fácil é ser colega, fazer companhia a alguém, dizer o que ele deseja ouvir. Difícil é ser amigo para todas as horas e dizer sempre a verdade quando for preciso. E com confiança no que diz".',
      class: 'samara',
      rightAligned: true
    },{
      name: 'Paolo Conti',
      description: defaultText,
      class: 'paolo',
      rightAligned: false
    },{
      name: 'Gabriela Caldeira',
      description: defaultText,
      class: 'gabi',
      rightAligned: true
    }];
    
  }
})();