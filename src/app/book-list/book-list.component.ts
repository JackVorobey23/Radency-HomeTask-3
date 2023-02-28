import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookInterface, BookListComponentDto } from 'src/interface';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!:Observable<BookListComponentDto[]>;
  public allActive:boolean = true;
  constructor(private bookService: BookService){}

  ngOnInit(){
    this.books = this.bookService.getAllBooks();
  }

  onTabClick(toGet: string){
    switch (toGet){
      case 'all':
        this.books = this.bookService.getAllBooks();
        this.allActive = true;
        break;

      case 'recommend':
        this.books = this.bookService.getRecommendedBooks();
        this.allActive = false;
        break;
        
      default:
        console.log("incorrect tab");
    }
  }
}