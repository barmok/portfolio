import { Component, OnInit } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'Presentation', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'Projects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'Resume', homePath: '/', fragment: 'resume', pagePath: '/resume' },
    // { title: 'Blog', homePath: '/blog', fragment: '', pagePath: '/blog' }
  ];

    constructor(private bioService: BioService, private headerService: HeaderService) { }

  ngOnInit(): void {
  }
}
