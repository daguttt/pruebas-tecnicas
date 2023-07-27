import { Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Subject, tap } from 'rxjs';

import { BooksStorageService } from './books-storage.service';
import { Book } from '../models/book.model';

@Injectable()
export class BooksService {
  #storageService = inject(BooksStorageService);

  // state
  #booksCatalog = signal<Map<string, Book> | null>(null);

  // selectors
  booksCatalog = computed(() => this.#booksCatalog());

  // sources
  booksLoaded$ = this.#storageService.loadBooks();

  constructor() {
    // reducers
    this.booksLoaded$
      .pipe(
        takeUntilDestroyed(),
        tap(books => this.#storageService.saveReadingList(books))
      )
      .subscribe(books => this.#booksCatalog.set(books));
  }
}
