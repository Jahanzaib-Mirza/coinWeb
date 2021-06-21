import { Component, OnInit } from '@angular/core';
import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media';
import { ModalController } from '@ionic/angular';
import { CreateInvoiceComponent } from 'src/app/components/create-invoice/create-invoice.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { InvoiceService } from 'src/app/services/invoice.service';
import { invoice } from 'src/app/modals/invoice';



@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  edit: boolean = false;
  Form: FormGroup;
  invoiceData: invoice = {
    userId: "",
    companyId: "",
    receiverLogo: "",
    totalAmount: "",
    taxId: "",
    netAmount: "",
    date: "",
    signatureURL: "",
    invoiceURL: "",
    status: "",
  };;

  errMess: string
  FormErrors = {
    Name: "",
    Description: "",
    Rank: 1,
  };
  validationMessages = {};

  constructor(public http: HttpClient,private fb: FormBuilder, private invoiceService: InvoiceService, private router: Router,
    private modalCtrl: ModalController,) {
    this.onSubmit();
    this.getInvoice();
  }

  ngOnInit() {
  }

  // createForm() {
  //   this.Form = this.fb.group({
  //     password: ["", [Validators.required, Validators.minLength(8)]],
  //     fullName: ["", [Validators.required]],
  //     // userName: ["", [Validators.required]],
  //     role: ["", [Validators.required]],
  //     address: ["", [Validators.required]],
  //     phoneNumber: ["", [Validators.required]],
  //     email: ["", [Validators.required, Validators.email]],

  //   });
  //   this.Form.valueChanges.subscribe((data) => this.onValueChanged(data));

  //   this.onValueChanged();
  // };

  // onValueChanged(data?: any) {
  //   if (!this.Form) {
  //     return;
  //   }
  //   const form = this.Form;
  //   for (const field in this.FormErrors) {
  //     if (this.FormErrors.hasOwnProperty(field)) {
  //       // clear previous error message (if any)
  //       this.FormErrors[field] = "";
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         for (const key in control.errors) {
  //           if (control.errors.hasOwnProperty(key)) {
  //             this.FormErrors[field] += messages[key] + " ";
  //           }
  //         }
  //       }
  //     }
  //   }
  // };

  getInvoice(){
    this.invoiceService.getInvoice().subscribe((res)=>{
      console.log(res);
    },(errmess) => {
      this.errMess = <any>errmess;
    });
  }

  onSubmit(){
    this.invoiceData.companyId = localStorage.companyId;
    this.invoiceData.userId = localStorage.userId;
    this.invoiceData.receiverLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png";
    this.invoiceData.totalAmount = "6780";
    this.invoiceData.taxId = "sdkjddsdkk23";
    this.invoiceData.netAmount = "9889";
    this.invoiceData.date = "21-03-2021";
    this.invoiceData.signatureURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png";
    this.invoiceData.invoiceURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png";
    this.invoiceData.status = "unpaid";
    this.invoiceService.addInvoice(this.invoiceData).subscribe((res)=>{
      console.log(res);
    },(errmess) => {
      this.errMess = <any>errmess;
    });
    
  }



  toggleMenu() {
    const splitPane = document.querySelector('ion-split-pane')
    if (window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches)
      splitPane.classList.toggle('split-pane-visible')
  }
  async createInvoice() {
    const add = await this.modalCtrl.create({
      component: CreateInvoiceComponent,
    });
    await add.present();
  }
  editInvoice() {
    if (this.edit == false) {
      this.edit = true;
    }
    else {
      this.edit = false;
    }
  }
}
