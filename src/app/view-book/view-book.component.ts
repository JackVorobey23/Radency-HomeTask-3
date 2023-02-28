import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BookInterface, DetailedBook } from 'src/interface';
import { BookService } from '../book.service';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})

export class ViewBookComponent implements OnInit {

  constructor(private bookService: BookService) {}

  detailedBook$!: Observable<DetailedBook>;
  id!:number;
  ngOnInit(){
    this.detailedBook$ = this.bookService.getBookById(this.id);
  }
}