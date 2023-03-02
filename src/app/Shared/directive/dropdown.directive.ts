import { Directive, HostListener, HostBinding, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  exportAs: 'appDropDown',
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;


  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
