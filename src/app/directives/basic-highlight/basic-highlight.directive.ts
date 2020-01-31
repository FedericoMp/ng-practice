import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class BasicHighlightDirective {
  @HostListener('mouseover', ['$event.target'])
  onMouseOver() {
    this.highlightedText('lime');
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave() {
    this.unhighlightedText();
  }

  constructor(private el: ElementRef) { }

  private highlightedText(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private unhighlightedText() {
    this.el.nativeElement.style.backgroundColor = 'transparent';
  }
}
