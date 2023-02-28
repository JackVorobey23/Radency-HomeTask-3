import { ApplicationRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { DetailedBook } from 'src/interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edti-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EdtiBookComponent {
  id!: number;
  editBook?: DetailedBook;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(public router: Router, private bookService: BookService, private appRef: ApplicationRef) {
    router.events.pipe(
       filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    )
    .subscribe((e: NavigationEnd) => {
      if(e.url.length <= 1){
        this.editBook = {} as DetailedBook;
        return;
      }
      const a = e.url.split('/')[2];
      this.id = Number(a[a.length - 1]);
      bookService.getBookById(this.id).subscribe(a => this.editBook = a);
    });
  }
  AddBookClick(){
    this.bookService.saveBook(this.editBook!).subscribe();
  }
  onFileChange(Event: any){
    const file = Event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.editBook!.cover = reader.result!.toString();
    };
  }
  
}
