import { Component, OnInit } from '@angular/core';
import { AddSalaryComponent } from 'src/app/components/add-salary/add-salary.component';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { SalaryService } from 'src/app/services/salary.service';
import { SalaryButtonsComponent } from 'src/app/components/salary-buttons/salary-buttons.component';


@Component({
  selector: 'app-salary-portal',
  templateUrl: './salary-portal.page.html',
  styleUrls: ['./salary-portal.page.scss'],
})
export class SalaryPortalPage implements OnInit {

  salaries: any;

  constructor(public modalCtrl: ModalController,private salaryService: SalaryService,
    private alertCtrl: AlertController,private popCtrl: PopoverController) { 
    this.getSalaries();
  }

  ngOnInit() {
  }
  async addSalary(){
    const add = await this.modalCtrl.create({
      component: AddSalaryComponent,
    });
    add.onDidDismiss().then((data => {
      if(data.data != null){
        this.getSalaries();
      }
    }))
    await add.present();
  };

  async openBtn(ev: any, id:string) {
    console.log(id)
    const open = await this.popCtrl.create({
      component: SalaryButtonsComponent,
      componentProps:{
        id:id
      },
      event: ev
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getSalaries();
      }
    }))
    return await open.present()
  };

  getSalaries() {
    this.salaryService.getSalaries().subscribe((res) => {
      console.log(res);
      this.salaries = res;
    })
  };

  }
