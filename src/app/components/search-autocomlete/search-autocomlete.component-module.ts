import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { SearchAutocomleteComponent } from './search-autocomlete.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatAutocompleteModule,
    MatOptionModule,
    CommonModule
  ],
  declarations: [SearchAutocomleteComponent],
  providers: [],
  exports: [SearchAutocomleteComponent],
})
export class SearchAutocomleteComponentModule { }
