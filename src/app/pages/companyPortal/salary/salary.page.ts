import { Component, OnInit } from '@angular/core';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.page.html',
  styleUrls: ['./salary.page.scss'],
})
export class SalaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toggleMenu(){
    const splitPane = document.querySelector('ion-split-pane')
    if(window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches)
    splitPane.classList.toggle('split-pane-visible')
  }

}
