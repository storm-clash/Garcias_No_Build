import { Component } from '@angular/core';
import { ScrollService } from '../../Services/scroll.service';

@Component({
  selector: 'app-ho-iam',
  standalone: true,
  imports: [],
  templateUrl: './ho-iam.component.html',
  styleUrl: './ho-iam.component.scss'
})
export class HoIamComponent {

  constructor(private scrollService:ScrollService){}

  scrollTo(section: string) {
    this.scrollService.scrollTo(section);
  }
}
