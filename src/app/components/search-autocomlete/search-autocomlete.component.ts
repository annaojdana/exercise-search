import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, debounceTime, map } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-autocomlete',
  styleUrls: ['./search-autocomlete.component.scss'],
  templateUrl: './search-autocomlete.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAutocomleteComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  readonly startWith$: Observable<string> = this.search.valueChanges.pipe(
    map((form) => form.title),
    debounceTime(1000)
  );
  readonly list$: Observable<ProductModel[]> = this.startWith$.pipe(
    switchMap((data) => this._productsService.getAllWithSearch(data))
  );

  constructor(private _productsService: ProductsService) {}
}
