import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directive/dropdown.directive';
import { CloseDropdownDirective } from './directive/closedropdown.directive';
import { LoadingSpinnerComponent } from './lodaingspinner/lodaingspinner.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    DropdownDirective,
    CloseDropdownDirective,
    LoadingSpinnerComponent,
    TestingComponent
  ],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    CloseDropdownDirective,
    LoadingSpinnerComponent,
    TestingComponent
  ],
})
export class SharedModule {}
