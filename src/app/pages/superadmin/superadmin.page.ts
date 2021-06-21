import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.page.html',
  styleUrls: ['./superadmin.page.scss'],
})
export class SuperadminPage implements OnInit {

  pathId: any;
  constructor(private activatedRoute: ActivatedRoute,private router: Router) {
    // this.pathId = this.router.url
    // console.log(this.pathId)
  }

  ngOnInit() {
  }

}
