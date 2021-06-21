import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { debts } from 'src/app/modals/debt';
import { DebtService } from 'src/app/services/debt.service';


@Component({
  selector: 'app-add-debt',
  templateUrl: './add-debt.component.html',
  styleUrls: ['./add-debt.component.scss'],
})
export class AddDebtComponent implements OnInit {

  constructor(private debtService: DebtService, private modalCtrl: ModalController,
    private fb: FormBuilder) { 
      this.createForm();
    }

  ngOnInit() {
  };

  Form: FormGroup;
  debt: debts;
  errMess: string;
  FormErrors = {
    Name: "",
    Description: "",
    Rank: 1,
  };
  validationMessages = {};

  createForm() {
    this.Form = this.fb.group({
      borrowedFrom: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      description: ["", [Validators.required]],
      date: ["", [Validators.required]],
      dueDate: ["", [Validators.required]],

    });
    this.Form.valueChanges.subscribe((data) => this.onValueChanged(data));

    this.onValueChanged();
  };



  onValueChanged(data?: any) {
    if (!this.Form) {
      return;
    }
    const form = this.Form;
    for (const field in this.FormErrors) {
      if (this.FormErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.FormErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.FormErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  };


  onDismiss(){
    this.modalCtrl.dismiss();
  };

  onSubmit(){
    this.debt = this.Form.value;
    this.debt.userId = localStorage.userId;
    this.debt.companyId = localStorage.companyId;
    this.debt.amountPaid = '0';
    console.log(this.debt);
    this.debtService.addDebt(this.debt).subscribe((res)=>{
      console.log(res);
    })
  }



}
