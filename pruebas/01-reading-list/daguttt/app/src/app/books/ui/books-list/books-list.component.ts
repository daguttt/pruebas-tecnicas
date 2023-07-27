import { ChangeDetectionStrategy, Component, Input, NgIterable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Book } from '../../models/book.model';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books-list.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent {
  @Input() books: NgIterable<Book> = [];

  coverWidthClasses = 'w-48';

  trackByBookISBN(index: number, book: Book) {
    return book.ISBN;
  }
}
