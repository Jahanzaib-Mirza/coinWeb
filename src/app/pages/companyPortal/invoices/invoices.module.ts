import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicesPageRoutingModule } from './invoices-routing.module';

import { InvoicesPage } from './invoices.page';
import { CreateInvoiceComponent } from 'src/app/components/create-invoice/create-invoice.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesPageRoutingModule
  ],
  declarations: [InvoicesPage, CreateInvoiceComponent],
  entryComponents:[CreateInvoiceComponent]
})
export class InvoicesPageModule {}
