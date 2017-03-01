import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }

  public goToShopPage(){
    this.navCtrl.push(ShopPage);
  }

}
