import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { OnTheMenuPage } from '../onTheMenu/onTheMenu';
import { ShoppingListPage } from '../shoppingList/shoppingList';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OnTheMenuPage;
  tab2Root = FavoritesPage;
  tab3Root = ShoppingListPage;

  constructor() {

  }
}
