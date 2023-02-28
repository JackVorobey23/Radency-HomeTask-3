import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { EdtiBookComponent } from './edti-book/edti-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes =[
  { path: '', component: EdtiBookComponent},
  { path: 'edit/:id', component: EdtiBookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BooksPageComponent,
    EdtiBookComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
