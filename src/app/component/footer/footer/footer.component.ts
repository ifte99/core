import { Component, OnInit } from '@angular/core';
import { Footer } from '../../../app-shared/model/footer.model';
import { FooterDATA } from 'src/app/app-shared/data/footer.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footers: Footer[] = [];

  constructor() { }

  ngOnInit(): void {
    this.footers = FooterDATA;
  }

}
