import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchByTypingComponent } from './components/search-by-typing/search-by-typing.component';
import { SearchAutocomleteComponent } from './components/search-autocomlete/search-autocomlete.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { CryptosComponent } from './components/cryptos/cryptos.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SearchByTypingComponentModule } from './components/search-by-typing/search-by-typing.component-module';
import { SearchAutocomleteComponentModule } from './components/search-autocomlete/search-autocomlete.component-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { CryptosComponentModule } from './components/cryptos/cryptos.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'search-by-typing', component: SearchByTypingComponent },
      { path: 'autocoplete-search', component: SearchAutocomleteComponent },
      { path: 'university', component: UniversitiesComponent },
      { path: 'crypto-autocomplete', component: CryptosComponent }
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    SearchByTypingComponentModule,
    SearchAutocomleteComponentModule,
    UniversitiesComponentModule,
    CryptosComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
