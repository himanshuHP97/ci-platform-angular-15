import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../Shared/shared.module';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchFilterComponent,
    PrivacyPolicyComponent,
    PaginationComponent,
  ],
  imports: [SharedModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchFilterComponent,
    PrivacyPolicyComponent,
    PaginationComponent
  ],
})
export class ComponentsModule {}
