import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {

  public product:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.data.product;
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  public goToShopPage(){
    this.navCtrl.push(ShopPage);
  }

  public goToHomePage(){
    this.navCtrl.popToRoot();
  }

}
