import { ModalController } from '@ionic/angular';
import { NewBudgetComponent } from 'src/app/components/new-budget/new-budget.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onetime-budgets',
  templateUrl: './onetime-budgets.page.html',
  styleUrls: ['./onetime-budgets.page.scss'],
})
export class OnetimeBudgetsPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async addBudget(){
    const repay = await this.modalCtrl.create({
      component: NewBudgetComponent,
    });
    await repay.present();
  }

}
