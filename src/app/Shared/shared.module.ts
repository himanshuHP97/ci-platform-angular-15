import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directive/dropdown.directive';
import { LoadingSpinnerComponent } from './lodaingspinner/lodaingspinner.component';
import { TestingComponent } from './testing/testing.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './Pipes/search.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    TestingComponent,
    SearchPipe,
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
    SearchPipe,
    LoadingSpinnerComponent,
    TestingComponent
  ],
})
export class SharedModule {}
