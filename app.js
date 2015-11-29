(function(){
  var app = angular.module('store',[]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Docecahdron',
    price: 2.95,
    description: 'This file changes and so does the output :D',
    canPurchase: false,
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: '. . .',
    canPurchase: false,
  };
})();