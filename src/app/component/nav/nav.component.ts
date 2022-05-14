import { Component, OnInit } from '@angular/core';
import { NAVDATA } from 'src/app/app-shared/data/nav.data';
import { Nav } from 'src/app/app-shared/model/nav.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navs : Nav[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navs = NAVDATA;
  }
  
  
   
}
