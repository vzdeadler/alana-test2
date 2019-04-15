import { Component, ViewChild } from '@angular/core';
import { Slides, NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('formSlider') formSlider: Slides;

  userData = {
    name: '',
    lastname: '',
    gender: '',
    birthday: '',
    country: '',
    state: '',
    city: '',
    direction: '',
    countryCode: '',
    phone: '',
  }

  formStep: number;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {

  }

  ionViewDidLoad() {
    this.formStep = 1;
    this.formSlider.lockSwipes(true);
  }

  btnController(): void {
    switch(this.formStep){
      case 1:
        if(this.userData.name && this.userData.lastname && this.userData.gender && this.userData.birthday){
          this.formSlider.lockSwipes(false);
          this.formSlider.slideNext(500);
          this.formSlider.lockSwipes(true);
          this.formStep = 2;
        }
        break;
      
      case 2:
        if(this.userData.country && this.userData.state && this.userData.city && this.userData.direction && this.userData.countryCode && this.userData.phone){
          this.presentAlert();
        }
        break;

      default:
        break;
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      title: 'User data',
      subTitle: 'name: ' + this.userData.name + ' lastname: ' + this.userData.lastname + ' gender: ' + this.userData.gender + ' birthday: ' + this.userData.birthday + ' country: ' + this.userData.country + ' state: ' + this.userData.state + ' city: ' + this.userData.city + ' direction: ' + this.userData.direction + ' countryCode: ' + this.userData.countryCode + ' phone: ' + this.userData.phone,
      buttons: ['OK']
    });

    await alert.present();
  }

}
