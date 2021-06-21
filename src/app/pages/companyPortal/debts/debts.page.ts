import { Component, OnInit } from '@angular/core';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RepayDebtComponent } from 'src/app/components/repay-debt/repay-debt.component';
import { AddDebtComponent } from 'src/app/components/add-debt/add-debt.component';



@Component({
  selector: 'app-debts',
  templateUrl: './debts.page.html',
  styleUrls: ['./debts.page.scss'],
})
export class DebtsPage implements OnInit {

  constructor(public alertController: AlertController, public modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  toggleMenu(){
    const splitPane = document.querySelector('ion-split-pane')
    if(window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches)
    splitPane.classList.toggle('split-pane-visible')
  }
  async repayDebt(){
    const repay = await this.modalCtrl.create({
      component: RepayDebtComponent,
    });
    await repay.present();
  }
  async addDebt(){
    const add = await this.modalCtrl.create({
      component: AddDebtComponent,
    });
    await add.present();
  }
}

