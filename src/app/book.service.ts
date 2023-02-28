import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BookListComponentDto, DetailedBook } from 'src/interface';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<JSON>('https://localhost:7019/api/books?order=title');
  }
  getAllBooks(){
    return this.http.get<BookListComponentDto[]>('https://localhost:7019/api/books?order=title');
  }
  getRecommendedBooks(){
    return this.http.get<BookListComponentDto[]>('https://localhost:7019/api/books/recommended');
  }
  getBookById(id:number){
    return this.http.get<DetailedBook>(`https://localhost:7019/api/books/${id}`);
  }

}
