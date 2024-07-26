import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ScrollService } from '../../Services/scroll.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private scrollService: ScrollService) {}

  scrollTo(section: string) {
    this.scrollService.scrollTo(section);
  }
}
