import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { HoIamComponent } from "../ho-iam/ho-iam.component";
import { AboutComponent } from "../about/about.component";
import { ScrollService } from '../../Services/scroll.service';
import { ServicesComponent } from '../services/services.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavComponent, HoIamComponent, AboutComponent,ServicesComponent,SkillsComponent,PortfolioComponent,FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit{

  @ViewChild('hoIam') hoIam!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('services') services!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('portfolio') portfolio!: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    if (this.hoIam && this.about && this.services && this.skills && this.portfolio) {
      this.scrollService.registerElement('hoIam', this.hoIam.nativeElement);
      this.scrollService.registerElement('about', this.about.nativeElement);
      this.scrollService.registerElement('services', this.services.nativeElement);
      this.scrollService.registerElement('skills', this.skills.nativeElement);
      this.scrollService.registerElement('portfolio', this.portfolio.nativeElement);
    }
  }

}
