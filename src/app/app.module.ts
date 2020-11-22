import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OnTheMenuPage } from '../pages/onTheMenu/onTheMenu';
import { ShoppingListPage } from '../pages/shoppingList/shoppingList';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { FavoritesServiceProvider } from '../providers/favorites-service/favorites-service';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { GetRecipesPage } from '../pages/getRecipes/getRecipes';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    GetRecipesPage,
    ShoppingListPage,
    OnTheMenuPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    GetRecipesPage,
    ShoppingListPage,
    OnTheMenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritesServiceProvider,
    DataServiceProvider,
    Camera
  ]
})
export class AppModule {}
