import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directive/dropdown.directive';
import { CloseDropdownDirective } from './directive/closedropdown.directive';
import { LoadingSpinnerComponent } from './lodaingspinner/lodaingspinner.component';
import { TestingComponent } from './testing/testing.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropdownDirective,
    CloseDropdownDirective,
    LoadingSpinnerComponent,
    TestingComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,

    DropdownDirective,
    CloseDropdownDirective,
    LoadingSpinnerComponent,
    TestingComponent
  ],
})
export class SharedModule {}
