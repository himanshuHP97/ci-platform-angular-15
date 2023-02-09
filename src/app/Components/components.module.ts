import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../Shared/shared.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchFilterComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchFilterComponent,
    PaginationComponent
  ],
})
export class ComponentsModule {}
