let shoppingListsTemplate = require(__dirname + '/shoppingList.html');
let shoppingListsController = require(__dirname + '/shoppingList.controller.js');

let ShoppingListsComponent = {
  template: shoppingListsTemplate,
  controller: shoppingListsController
}

angular.module('myResolutionApp').component('shoppingLists', ShoppingListsComponent);