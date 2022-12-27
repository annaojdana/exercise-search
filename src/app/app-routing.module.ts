import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchByTypingComponent } from './components/search-by-typing/search-by-typing.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SearchByTypingComponentModule } from './components/search-by-typing/search-by-typing.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'search-by-typing', component: SearchByTypingComponent },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    SearchByTypingComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
