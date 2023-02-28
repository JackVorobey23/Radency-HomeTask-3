import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BookListComponentDto, DetailedBook } from 'src/interface';
import { tap } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUpdated = new EventEmitter();
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get<JSON>(environment.url + '?order=title');
  }
  getAllBooks(){
    return this.http.get<BookListComponentDto[]>(environment.url + '?order=title');
  }
  getRecommendedBooks(){
    return this.http.get<BookListComponentDto[]>(environment.url + '/recommended');
  }
  getBookById(id:number){
    return this.http.get<DetailedBook>(environment.url + `/${id}`);
  }
  saveBook(bookSave:DetailedBook){
    return this.http.post(environment.url + "/save", bookSave).pipe(
      tap(()=> {
        this.booksUpdated.emit();
      })
    );
  }
}
