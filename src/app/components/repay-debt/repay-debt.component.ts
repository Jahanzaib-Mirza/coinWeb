import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-repay-debt',
  templateUrl: './repay-debt.component.html',
  styleUrls: ['./repay-debt.component.scss'],
})
export class RepayDebtComponent implements OnInit {
  repayInput = new FormControl('', Validators.required)

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  sendData() {
    console.log(this.repayInput.value)
  }
  // let el = await this.content.getScrollElement();
  // el.style['height'] = '50%';      
  // this.content.scrollToBottom();
}
