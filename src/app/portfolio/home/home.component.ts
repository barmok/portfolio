import { Component, OnInit } from '@angular/core';
import { BioService } from '../../core/services/bio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bio$ = this.bioService.getBio();

  respOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', userSmallHeadings: false},
    { viewClasses: 'd-none d-md-none', headingClass: '', userSmallHeadings: true}
  ]

  constructor(private bioService: BioService) {}

  ngOnInit(): void {
  }

}
