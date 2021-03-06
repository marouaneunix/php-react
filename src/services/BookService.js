import axios from "axios";

class BookService {
  findBooks() {
    return axios.get('/books');
  }

  findBooksByTitle(title) {
    return axios.get(`/books?title=${title}`);
  }

  save(book) {
    book.isbn = '5ea041f453cb2ba84877c560';
    return axios.post('/books', book);
  }
}

export const bookService = new BookService();