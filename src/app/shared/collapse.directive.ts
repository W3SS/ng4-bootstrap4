import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[mbCollapse]'
})
export class CollapseDirective {

  @HostBinding('class.fade active in') isCollapse = true;

  @HostListener('click') toggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }
}
