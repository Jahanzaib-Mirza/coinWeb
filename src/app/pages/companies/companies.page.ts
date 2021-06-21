import { Component, OnInit } from '@angular/core';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media';
import { users } from 'src/app/modals/users';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss'],
})
export class CompaniesPage implements OnInit {
  users: users[];
  errMess: string;

  constructor(private userService: UserService) { 
    this.getAdmins();
  }

  ngOnInit() {
  }
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
}
