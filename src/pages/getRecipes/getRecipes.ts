import { Component } from '@angular/core';
import { Camera, PictureSourceType } from '@ionic-native/camera';
import { NavController, ToastController, ActionSheetController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { FavoritesServiceProvider } from '../../providers/favorites-service/favorites-service';
import * as Tesseract from 'tesseract.js'

@Component({
  selector: 'page-getRecipes',
  templateUrl: 'getRecipes.html'
})
export class GetRecipesPage {

  selectedImage: string;
  detectedText: string;
  imageText: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    public favoritesServiceProvider: FavoritesServiceProvider, private camera: Camera, private actionSheetCtrl: ActionSheetController) {

  }

  selectSource() { 
    console.log("In selectSource");
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Capture Image',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  getPicture(sourceType: PictureSourceType) {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    });
  }

  recognizeImage() {
    const worker = Tesseract.createWorker({
      logger: m => console.log(m)
    });
    Tesseract.setLogging(true);
    work();
  
    async function work() {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
  
      let result = await worker.detect(this.selectedImage);
      this.detectedText = result.data;
  
      let newResult = await worker.recognize(this.selectedImage);
      this.imageText = newResult.data;
      console.log(newResult.data);
  
      await worker.terminate();
    }
  }

  // recognizeImage() {
  //   console.log("in recognizeImage");
    // .then(result => {
    //   console.log("In recognizeImage callback");
    //   this.imageText = result.data;
    // });
    // Tesseract.recognize(this.selectedImage)
    // .progress(message => {
    //   if (message.status === 'recognizing text')
    //   this.progress.set(message.progress);
    // })
    // .catch(err => console.error(err))
    // .then(result => {
    //   this.imageText = result.text;
    // })
    // .finally(resultOrError => {
    //   this.progress.complete();
    // });
  // }

}
