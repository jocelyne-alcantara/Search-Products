(function() {

  var app = angular.module('itemList', []);

  app.controller('ProductController', function(){
    this.products = items;
  });

  app.controller('ItemController', function(){
    this.articulo= {};
    this.addArticulo = function(product){
      product.articulos.push(this.articulo);
      this.articulo = {};
    };
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName; 
    };
  });

  var items = [
    {
      articulos: [{title:'Wii console, games/Nintendo games', 
                     price: 100, 
                     category: 'games', 
                     description: 'Wii Console @ $100, Two Wii remotes @ $10 each, Wii games @ 20 each, Nintendo DS @ $50, Nintendo games @ $15 each', 
                     location: 'San Francisco', 
                     phone:'209-993-1175', 
                     email: 'joc@example.org', 
                     images: '00N0N_8zS9M2XbCqd_600x450.jpg'},
                  {title:'12.5 Lenovo Laptop Lightweight', 
                     price: 200, 
                     category: 'laptop', 
                     description: 'Pick up in Sunnyvale Price is firm Lenovo X201 Thinkpad laptop in excellent working condition Light and powerful perfect for travelers and students The battery holds a good charge Lenovos Laptops are the best, reliable and the most sold on the market', 
                     location: 'Daly City', 
                     phone:'209-603-2050', 
                     email: 'joe@example.org', 
                     images: '00v0v_1zV0cl2ExQx_600x450.jpg'}]
    }
  ];

})();


 // -------search----(-
 it('search from text input', function () {
   var searchText = element(by.model('searchText'));
   searchText.clear();
 });