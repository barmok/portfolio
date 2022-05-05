import { Component, OnInit } from '@angular/core';
import { BioService } from '../../core/services/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bio$ = this.bioService.getBio();

  respOptions = [
      { viewClasses: 'd-none d-lg-flex', headingClass: 'display-3', userSmallHeadings:false},
      { viewClasses: 'd-flex d-lg-none', headingClass: '', userSmallHeadings:true}

  ];

  constructor(private bioService: BioService) { }

  ngOnInit(): void {
  }

}
