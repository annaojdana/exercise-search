import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, combineLatest, map, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

  readonly search: FormGroup = new FormGroup({title: new FormControl()});
  private _startsWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public startsWith$: Observable<string> = this._startsWithSubject.asObservable();

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAll(), this.startsWith$,
  ]).pipe(map(([products, startsWith] : [ProductModel[],string]) =>
      products.filter(product => product.title.startsWith(startsWith)
      )
    )
  );


  constructor(private _productsService: ProductsService) {
  }

  onSearchSubmitted(search: FormGroup): void {
    this._startsWithSubject.next(search.get('title')?.value);
  }
}
