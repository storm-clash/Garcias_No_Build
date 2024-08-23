import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
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
  isClicked = false;


  constructor(private scrollService: ScrollService, private el: ElementRef, private renderer: Renderer2) {
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

  toggleMenu() {
    const listItems = this.el.nativeElement.querySelectorAll('.hamburger');

    if (listItems.length !== 3) {
      console.error('Could not find all list items.');
      return;
    }

    if (!this.isClicked) {
      this.renderer.setStyle(listItems[0], 'transform', 'translateY(15px) rotate(45deg)');
      this.renderer.setStyle(listItems[1], 'opacity', '0'); 
      this.renderer.setStyle(listItems[2], 'transform', 'translateY(-15px) rotate(-45deg)');

      this.isClicked = true;
      setTimeout(() => {
        const hamburger = this.el.nativeElement.querySelector('.hamburger__Menu-container');
        if (hamburger) {
          this.renderer.addClass(hamburger, 'show');
        } else {
          console.error('Could not find the hamburger__Menu-container element.');
        }
      }, 0);
      
    } else {
      this.renderer.removeStyle(listItems[0], 'transform');
      this.renderer.removeStyle(listItems[1], 'opacity'); 
      this.renderer.removeStyle(listItems[2], 'transform');

      const hamburger = this.el.nativeElement.querySelector('.hamburger__Menu-container');
      setTimeout(() => {
        const hamburger = this.el.nativeElement.querySelector('.hamburger__Menu-container');
        if (hamburger) {
          this.renderer.removeClass(hamburger, 'show');
        } else {
          console.error('Could not find the hamburger__Menu-container element.');
        }
      }, 0);

      this.isClicked = false;
    }
  }
}
