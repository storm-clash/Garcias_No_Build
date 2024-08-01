import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ScrollService } from '../../Services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  isMobileResolution: boolean;
  isExpanded: boolean = false;


  constructor(private scrollService: ScrollService) {
    this.isMobileResolution = window.innerWidth <= 768;
  }

  scrollTo(section: string) {
    this.scrollService.scrollTo(section);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileResolution = event.target.innerWidth <= 600;
  }

  toggleWidth() {
    this.isExpanded = !this.isExpanded;
  }
}
