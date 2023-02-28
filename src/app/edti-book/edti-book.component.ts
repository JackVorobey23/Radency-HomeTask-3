import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailedBook } from 'src/interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edti-book',
  templateUrl: './edti-book.component.html',
  styleUrls: ['./edti-book.component.css']
})

export class EdtiBookComponent {
  id!: number;
  editBook?: DetailedBook;
  constructor(private activateRoute: ActivatedRoute, private bookService: BookService){
      this.id = activateRoute.snapshot.params['id'];
      bookService.getBookById(this.id).subscribe(a => this.editBook = a);
  }
  
}
