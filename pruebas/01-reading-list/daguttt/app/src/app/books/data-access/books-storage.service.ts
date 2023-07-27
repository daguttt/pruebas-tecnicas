import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, of } from 'rxjs';

import { replacer, reviver } from 'src/app/shared/utils/serializers.functions';

import { BooksResponse } from '../models/books-response.model';
import { Book } from '../models/book.model';

@Injectable()
export class BooksStorageService {
  #http = inject(HttpClient);

  loadBooks() {
    return this.#http.get<BooksResponse>('/assets/books.json').pipe(
      map(response => {
        return new Map<string, Book>(
          response.library.map(book => [
            book.book.ISBN,
            {
              ISBN: book.book.ISBN,
              title: book.book.title,
              author: book.book.author.name,
              pages: book.book.pages,
              genre: book.book.genre,
              cover: book.book.cover,
            },
          ]) as [string, Book][]
        );
      })
    );
  }
}
