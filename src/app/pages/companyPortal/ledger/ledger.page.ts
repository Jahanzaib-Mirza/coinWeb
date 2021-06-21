import { Component, OnInit } from '@angular/core';
import {SIZE_TO_MEDIA} from '@ionic/core/dist/collection/utils/media';
import { LedgerService } from 'src/app/services/ledger.service';


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.page.html',
  styleUrls: ['./ledger.page.scss'],
})
export class LedgerPage implements OnInit {
  ledger: any;
  constructor(private ledgerService: LedgerService,) { 
    this.getLedger();
    this.getCompanyBalance();
  }
  ngOnInit() {
  }
  toggleMenu(){
    const splitPane = document.querySelector('ion-split-pane')
    if(window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches)
    splitPane.classList.toggle('split-pane-visible')
  };


  getLedger(){
    this.ledgerService.getLedger().subscribe((res)=>{
      console.log(res);
    })
  };

  getCompanyBalance(){
    this.ledgerService.getCompanyBalance().subscribe((res)=>{
      console.log(res);
    })
  };

}
