import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DebtService } from 'src/app/services/debt.service';
import { RepayDebtComponent } from 'src/app/components/repay-debt/repay-debt.component';
import { AddDebtComponent } from 'src/app/components/add-debt/add-debt.component';

@Component({
  selector: 'app-active-debts',
  templateUrl: './active-debts.page.html',
  styleUrls: ['./active-debts.page.scss'],
})
export class ActiveDebtsPage implements OnInit {

  constructor(private debtService: DebtService, private modalCtrl: ModalController) {
    this.getDebts();
  };

  getDebts() {
    this.debtService.getDebts().subscribe((res) => {
      console.log(res);
    })
  }

  ngOnInit() {
  }
  async repayDebt() {
    const repay = await this.modalCtrl.create({
      component: RepayDebtComponent,
    });
    await repay.present();
  }
  async addDebt() {
    const add = await this.modalCtrl.create({
      component: AddDebtComponent,
    });
    await add.present();
  }

}
