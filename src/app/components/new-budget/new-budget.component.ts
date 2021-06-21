import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { budgets } from 'src/app/modals/budgets';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.scss'],
})
export class NewBudgetComponent implements OnInit {

  Form: FormGroup;
  budget: budgets;
  constructor(private fb: FormBuilder, private budgetService: BudgetService,
    private modalCtrl: ModalController) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.Form = this.fb.group({
      description: ["", [Validators.required]],
      period: ["", [Validators.required]],
      amount: ["", [Validators.required]],
    })
  };

  onSubmit() {
    this.budget = this.Form.value;
    this.budget.category = "food";
    this.budget.budgetType = "kuch bhi"
    this.budget.userId = localStorage.userId;
    this.budget.companyId = localStorage.companyId;
    console.log(this.budget);
    this.budgetService.addBudget(this.budget).subscribe((res)=>{
      console.log(res);
    })
  };


  onDismiss(){
    this.modalCtrl.dismiss();
  };




}
