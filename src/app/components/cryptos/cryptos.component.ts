import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, debounceTime, map } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';

@Component({
  selector: 'app-cryptos',
  styleUrls: ['./cryptos.component.scss'],
  templateUrl: './cryptos.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptosComponent {
  readonly search: FormGroup = new FormGroup({ symbol: new FormControl() });
  readonly startWith$: Observable<string> = this.search.valueChanges.pipe(
    map((form) => form.symbol),
    debounceTime(1000)
  );
  readonly list$: Observable<CryptoModel[]> = this.startWith$.pipe(
    switchMap((data) => {
      console.log(data);
      return this._cryptosService.getAll(data);
    })
  );
  private _cryptosSubject: BehaviorSubject<string[]> = new BehaviorSubject<
    string[]
  >([]);
  public cryptos$: Observable<string[]> = this._cryptosSubject.asObservable();

  constructor(private _cryptosService: CryptosService) {}

  selectCrypto(crypto: string): void {
    this._cryptosSubject.next([crypto, ...this._cryptosSubject.value]);
  }
}
