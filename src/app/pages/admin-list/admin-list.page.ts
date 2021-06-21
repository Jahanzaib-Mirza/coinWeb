import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media';
import { UserService } from 'src/app/services/user.service';
import { AddAdminPage } from '../add-admin/add-admin.page';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {

  constructor(private userService: UserService,private alertCtrl: AlertController,
    private modalCtrl: ModalController) { 
    this.getAdmins();
  }

  errMess: string;
  users: any;

  ngOnInit() {
  };

  toggleMenu(){
    const splitPane = document.querySelector('ion-split-pane')
    if(window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches)
    splitPane.classList.toggle('split-pane-visible')
  };

  getAdmins() {
    this.userService.getAdmins().subscribe((res) => {
      this.users = res;
      console.log(res);
    },
      (errmess) => {
        this.errMess = <any>errmess;
      });
  };

  deleteUser(id) {
    this.userService.deleteUser(id)
      .subscribe(() => {
        console.log("deleted");
        this.getAdmins();
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });

  };

  async openAddAdmin() {
    const open = await this.modalCtrl.create({
      component: AddAdminPage,
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getAdmins();
      }
    }))
    return await open.present()
  }

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
          this.deleteUser(id);
        },
      }]
    });

    await alert.present();

  };

}
