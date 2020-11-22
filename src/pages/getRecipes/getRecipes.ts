import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import * as Tesseract from 'tesseract.js';

@Component({
  selector: 'page-getRecipes',
  templateUrl: 'getRecipes.html'
})
export class GetRecipesPage {

  selectedImage: string;
  imageText: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataServiceProvider,
    private camera: Camera, private actionSheetCtrl: ActionSheetController ) {

  }

  selectSource() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
            this.loadPhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Capture Image',
          handler: () => {
            this.loadPhoto(this.camera.PictureSourceType.CAMERA)
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  loadPhoto(sourceType: PictureSourceType) {
    
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then(imageData => {
      this.selectedImage = `data:image/jpeg;base64,${imageData}`
    })
  }

  recognizeImage() {
    Tesseract.recognize(this.selectedImage);
    // /.progress(message => {
    //   if (this.message.status === 'recognizing text') {
    //     this.progress.set(message.progress);
    //   }
    // })
    // .then(result => {
    //   this.imageText = result.text;
    // }).catch (error => {
    //   console.log('error!!!!');
    // });
  }

}
