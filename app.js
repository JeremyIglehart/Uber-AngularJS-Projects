(function(){
  var app = angular.module('store',[]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Docecahdron',
    price: 4.95,
    description: 'This file changes and so does the output :D',
    canPurchase: false,
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: '. . .',
    canPurchase: false,
  },
  {
    name: 'Beck\'s Gem',
    price: 995.95,
    description: 'Super rare',
    canPurchase: false,
  }];
})();