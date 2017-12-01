import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-test',
 	templateUrl: 'test.html',
 })
 export class TestPage {

 	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad TestPage');
 	}

 	showAlert() {
 		let alert = this.alertCtrl.create({
 			title: 'Você está logado',
 			subTitle: 'agora você está logado!',
 			buttons: ['OK']
 		});
 		alert.present();
 	}

 }
