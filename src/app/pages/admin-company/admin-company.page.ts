import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media';
import { CompanyService } from 'src/app/services/company.service';
import { AddCompanyPage } from '../add-company/add-company.page';
import { UpdateCompanyPage } from '../update-company/update-company.page';


@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.page.html',
  styleUrls: ['./admin-company.page.scss'],
})
export class AdminCompanyPage implements OnInit {

  id: string;
  companies: any;
  errMess: string;

  constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService,
    private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCompanies(this.id);
  }

  ngOnInit() {
  };

  toggleMenu() {
    const splitPane = document.querySelector('ion-split-pane')
    if (window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches)
      splitPane.classList.toggle('split-pane-visible')
  };

  async confirmation(id) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Are you sure you want to delete',
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Delete',
        role: 'Delete',
        handler: () => {
          this.deleteCompany(id);
        },
      }]
    });

    await alert.present();

  };

  async openAddCompany() {
    const open = await this.modalCtrl.create({
      component: AddCompanyPage,
      componentProps: {
        id: this.id,
      }

    })
    open.onDidDismiss().then((data => {
      if (data.data != null) {
        this.getCompanies(this.id);
      }
      }))
    return await open.present()
  };

  async openUpdateCompany(id) {
    const open = await this.modalCtrl.create({
      component: UpdateCompanyPage,
      componentProps: {
        id: id,
      }

    })
    open.onDidDismiss().then((data => {
      if (data.data != null) {
        this.getCompanies(this.id);
      }
    }))
    return await open.present()
  };

  getCompanies(id) {
    this.companyService.getCompaniesOfAdmin(id).subscribe((res) => {
      console.log(res);
      this.companies = res;
    })
  };

  deleteCompany(id) {
    this.companyService.deleteCompany(id)
      .subscribe(() => {
        console.log("deleted");
        this.getCompanies(this.id);
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });

  };

}
