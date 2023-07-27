export interface BooksResponse {
  library: Library[];
}

export interface Library {
  book: ApiBook;
}

export interface ApiBook {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: Author;
}

export interface Author {
  name: string;
  otherBooks: string[];
}
