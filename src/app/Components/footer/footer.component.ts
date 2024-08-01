import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../Services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  isMobileResolution: boolean;
  constructor(private scrollService: ScrollService) {
    this.isMobileResolution = window.innerWidth <= 768;
  }

  scrollTo(section: string) {
    this.scrollService.scrollTo(section);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileResolution = event.target.innerWidth <= 768;
  }
}
