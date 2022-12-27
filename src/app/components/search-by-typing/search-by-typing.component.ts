import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, map, debounceTime, combineLatest } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search-by-typing',
  styleUrls: ['./search-by-typing.component.scss'],
  templateUrl: './search-by-typing.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchByTypingComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  readonly startWith$: Observable<string> = this.search.valueChanges.pipe(
    map((form) => form.title),
    debounceTime(1000)
  );

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(),
    this.startWith$,
  ]).pipe(
    map(([products, startWith]) => {
      if (!startWith) {
        return [];
      }
      return products.filter((product) => product.title.startsWith(startWith));
    })
  );
  constructor(private _productsService: ProductsService) {}
}
