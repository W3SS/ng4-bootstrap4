import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[mbHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.color') color = '#0275d8';
  @HostBinding('style.cursor') cursor = 'pointer';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}


  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#014c8c');
    this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'underline');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#0275d8');
    this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'none');
  }

}
