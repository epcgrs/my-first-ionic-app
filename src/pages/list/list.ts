import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  private url:string = 'http://192.168.0.21:3000/beers';
  public beer = {name: "", info: ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController){

  }

  saveBeer(beer){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options  = new RequestOptions({headers: headers});
    this.http.post(this.url + "/", beer, options).map(res=>{res.json() }).subscribe(data => {
      let toast = this.toastCtrl.create({
        message: 'Cerveja Cadastrada com sucesso',
        duration: 3000
      });
      toast.present();
    });
  }

}
