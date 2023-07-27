import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { BooksService } from './data-access/books.service';
import { BooksStorageService } from './data-access/books-storage.service';
import { BooksListComponent } from './ui/books-list/books-list.component';
import { ReadingListComponent } from './ui/reading-list/reading-list.component';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [CommonModule, BooksListComponent, ReadingListComponent, RouterLink],
  templateUrl: './books-page.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BooksService, BooksStorageService],
})
export default class BooksPageComponent {
  booksService = inject(BooksService);
}
