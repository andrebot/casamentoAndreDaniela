(function () {
  angular.module('weddingPage')
         .controller('padrinhosController', PadrinhosController);

  function PadrinhosController () {
    var vm = this;
    var defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pharetra ipsum. Sed tempus eu justo sed commodo. Suspendisse condimentum in ante et aliquam. Morbi suscipit pulvinar nibh in viverra. Nulla lobortis felis et mi pulvinar laoreet. Mauris eget lorem egestas, elementum felis quis, suscipit eros. Maecenas nec varius nulla, eu faucibus diam.';

    vm.padrinhos = [{
      name: 'Celso Peter e Cecília Mara',
      description: defaultText,
      class: 'celso-ceci',
      rightAligned: true
    },{
      name: 'Paula Botelho e Thiago Lins',
      description: defaultText,
      class: 'paula-thi',
      rightAligned: false
    },{
      name: 'Kathy e Rafael',
      description: defaultText,
      class: 'katy-rafael',
      rightAligned: true
    },{
      name: 'Leonardo Cabral e Lilia Finelis',
      description: defaultText,
      class: 'leo-li',
      rightAligned: false
    },{
      name: 'Tiago e Mayte',
      description: defaultText,
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
      name: 'Patricia',
      description: defaultText,
      class: 'patricia',
      rightAligned: true
    },{
      name: 'Gabriel Gonçalves',
      description: defaultText,
      class: 'phelps',
      rightAligned: false
    },{
      name: 'Samara',
      description: defaultText,
      class: 'samara',
      rightAligned: true
    },{
      name: 'Paolo Conti',
      description: defaultText,
      class: 'paolo',
      rightAligned: false
    }];
    
  }
})();