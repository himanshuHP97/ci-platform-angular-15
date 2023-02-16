import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directive/dropdown.directive';
import { CloseDropdownDirective } from './directive/closedropdown.directive';
import { LoadingSpinnerComponent } from './lodaingspinner/lodaingspinner.component';

@NgModule({
  declarations: [DropdownDirective,CloseDropdownDirective, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [DropdownDirective,CloseDropdownDirective,LoadingSpinnerComponent],
})
export class SharedModule {}
