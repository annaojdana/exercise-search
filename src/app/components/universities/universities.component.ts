import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UniversitiesModel } from '../../models/universities.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-universities',
  styleUrls: ['./universities.component.scss'],
  templateUrl: './universities.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniversitiesComponent {
  readonly search: FormGroup = new FormGroup({ country: new FormControl() });
  readonly startWith$: Observable<string> = this.search.valueChanges.pipe(
    map((form) => form.country),
    debounceTime(1000)
  );
  readonly list$: Observable<UniversitiesModel[]> = this.startWith$.pipe(
    switchMap((country) => {
      if (!country) return [];
      return this._universitiesService.getAll(country);
    })
  );

  constructor(private _universitiesService: UniversitiesService) {}
}
