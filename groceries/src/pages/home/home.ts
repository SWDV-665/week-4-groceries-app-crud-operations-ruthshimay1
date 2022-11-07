import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";
  quantity =[1,2,3,4,5,6,7,8]
  // quantity = Array(10).fill(0).map((i, idx) => idx + 1)

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService:InputDialogServiceProvider) {

  }

  loadItems(){
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    console.log("Remove Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + "...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);

  }

  editItem(item, index) {
    // show or print this message to the console (for debuging purpose)
    console.log("Edit Item - ", item, index);

    // toast -> show me a pop up message on click what action is commited (it is optional)
    const toast = this.toastCtrl.create({
      message: 'Edittitng Item - ' + index + "...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompot(item, index);

  }

  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompot();
  }

  

}
