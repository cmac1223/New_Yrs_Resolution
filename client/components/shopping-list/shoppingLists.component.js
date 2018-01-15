let shoppingListsTemplate = require(__dirname + '/shoppingLists.html');
let shoppingListsController = require(__dirname + '/shoppingLists.controller.js');

let ShoppingListsComponent = {
  template: shoppingListsTemplate,
  controller: shoppingListsController
}

angular.module('myResolutionApp').component('shoppingLists', ShoppingListsComponent);