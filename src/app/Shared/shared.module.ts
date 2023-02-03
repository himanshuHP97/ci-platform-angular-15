import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directive/dropdown.directive';

@NgModule({
  declarations: [DropdownDirective],
  imports: [CommonModule],
  exports: [DropdownDirective],
})
export class SharedModule {}
