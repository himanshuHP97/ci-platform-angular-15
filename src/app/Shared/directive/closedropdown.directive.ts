import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDownClose]',
  exportAs: 'appDropDownClose',
})

export class CloseDropdownDirective {
  @HostBinding('class.close') isClose = true;

  @HostListener('click') toggleOpen() {
    this.isClose = !this.isClose;
  }
}
