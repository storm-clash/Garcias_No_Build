import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }


  private elementRefs: { [key: string]: HTMLElement } = {};

  registerElement(id: string, element: HTMLElement) {
    this.elementRefs[id] = element;
  }

  scrollTo(id: string) {
    const element = this.elementRefs[id];
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with ID ${id} not found.`);
    }
  }
}
