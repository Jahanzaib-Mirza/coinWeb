import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss'],
})
export class EditExpenseComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
