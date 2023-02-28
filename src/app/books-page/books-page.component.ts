import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent {
  public trigger: number = 0;

  public rerender(): void {
    this.trigger++;
    console.log("aaa");
  }
}
