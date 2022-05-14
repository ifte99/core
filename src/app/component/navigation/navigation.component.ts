import { Component, OnInit } from '@angular/core';
import { faHourglassEmpty } from '@fortawesome/free-solid-svg-icons';
import { NAVDATA } from 'src/app/app-shared/data/nav.data';
import { Nav } from 'src/app/app-shared/model/nav.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isdropdownShow = false;
  Id:any;
  navs : Nav[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navs = NAVDATA;
  }

  dropdownShow(id:any){
    this.isdropdownShow=true;
    this.Id=id;
    
   

  }
  

}
