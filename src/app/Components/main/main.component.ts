import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HoIamComponent } from "../ho-iam/ho-iam.component";
import { AboutComponent } from "../about/about.component";
import { ScrollService } from '../../Services/scroll.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent, HoIamComponent, AboutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit{

  @ViewChild('hoIam') hoIam!: ElementRef;
  @ViewChild('about') about!: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    if (this.hoIam && this.about) {
      this.scrollService.registerElement('hoIam', this.hoIam.nativeElement);
      this.scrollService.registerElement('about', this.about.nativeElement);
    }
  }

}
