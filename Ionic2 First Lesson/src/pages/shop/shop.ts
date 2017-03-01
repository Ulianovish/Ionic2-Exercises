import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuyoutPage }from '../buyout/buyout';


@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public goToBuyoutPage(product:string){
    this.navCtrl.push(BuyoutPage, {'product':product});
  }

  public products = ['Milk', 'Bread', 'Apples'];

}
