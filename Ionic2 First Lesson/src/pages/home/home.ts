import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { BuyoutPage } from '../buyout/buyout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  public goToShopPage(){
    this.navCtrl.push(ShopPage)
  }

  public goToBuyoutPage(){
    this.navCtrl.push(BuyoutPage)
  }
}
