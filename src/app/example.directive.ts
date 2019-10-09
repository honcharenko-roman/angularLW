import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements AfterViewChecked {
  ngAfterViewChecked(): void {
    if (this.el.nativeElement.textContent.length > 20) {
      let textID = document.getElementById('tooltiptextID');
      textID.innerHTML = this.el.nativeElement.textContent;
      this.el.nativeElement.textContent = '...';
    }
  }

  constructor(public el: ElementRef) {
  }

}
