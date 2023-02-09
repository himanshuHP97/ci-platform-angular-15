import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directive/dropdown.directive';
import { CloseDropdownDirective } from './directive/closedropdown.directive';

@NgModule({
  declarations: [DropdownDirective,CloseDropdownDirective],
  imports: [CommonModule],
  exports: [DropdownDirective,CloseDropdownDirective],
})
export class SharedModule {}
