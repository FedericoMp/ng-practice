import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  targetElement: ElementRef;

  @HostListener('mouseover')
  onMouseOver() {
    // this.highlight('background-color', 'lime');
    this.backgroundColor = 'lime';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this.highlight('background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

  constructor(
    private el: ElementRef,
    private rernder: Renderer2
  ) { }

  ngOnInit() { }

  // private highlight(styleAttr: string, styleVal: string) {
  //   this.rernder.setStyle(this.el.nativeElement, styleAttr, styleVal);
  // }

}
