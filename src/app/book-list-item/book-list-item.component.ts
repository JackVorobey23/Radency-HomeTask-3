import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { BookInterface, BookListComponentDto, DetailedBook, Review } from 'src/interface';
import { BookService } from '../book.service';
import { ViewBookComponent } from '../view-book/view-book.component';
@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})

export class BookListItemComponent implements OnInit {
  @Input() book?: BookListComponentDto;
  constructor(private bookService: BookService, private modal: NgbModal){}

  ngOnInit(){
    console.log(this.book!.id);
  }

  onViewClick(){
    const modal = this.modal.open(ViewBookComponent, {centered: true,size: "xl"});
    modal.componentInstance.id = this.book?.id;
  }
}