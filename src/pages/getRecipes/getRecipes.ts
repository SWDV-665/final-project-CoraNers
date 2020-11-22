import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { FavoritesServiceProvider } from '../../providers/favorites-service/favorites-service';

@Component({
  selector: 'page-getRecipes',
  templateUrl: 'getRecipes.html'
})
export class GetRecipesPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    public favoritesServiceProvider: FavoritesServiceProvider, private camera: Camera) {

  }

  selectSource() { 
    console.log("In selectSource");
  }

}
