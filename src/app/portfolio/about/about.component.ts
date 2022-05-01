import { Component, OnInit } from '@angular/core';
import { BioService } from '../../core/services/bio.services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bio$ = this.bioService.getBio();

  respOptions = [
      { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', userSmallHeadings:false}
      { viewClasses: 'd-flex d-md-none', headingClass: '', userSmallHeadings:true}

  ];

  constructor(private bioService: BioService) { }

  ngOnInit(): void {
  }

}
