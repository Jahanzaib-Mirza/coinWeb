import { Component, OnInit } from '@angular/core';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media';
import { AlertController } from '@ionic/angular';
import { AddCustomerComponent } from 'src/app/components/add-customer/add-customer.component';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  toggleMenu(){
    const splitPane = document.querySelector('ion-split-pane')
    if(window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches)
    splitPane.classList.toggle('split-pane-visible')
  }
  async addCustomer(){
    const add = await this.modalCtrl.create({
      component: AddCustomerComponent,
    });
    await add.present();
  }
  
}
