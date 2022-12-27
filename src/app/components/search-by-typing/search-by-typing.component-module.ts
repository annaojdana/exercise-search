import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SearchByTypingComponent } from './search-by-typing.component';
import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
  ],
  declarations: [SearchByTypingComponent],
  providers: [],
  exports: [SearchByTypingComponent],
})
export class SearchByTypingComponentModule {}
