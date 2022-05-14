import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  isSideNavOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  OnToggle(){
    this.isSideNavOpen = !this.isSideNavOpen;
  }

}
