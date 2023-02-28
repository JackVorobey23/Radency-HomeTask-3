import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdtiBookComponent } from './edit-book/edit-book.component';

const appRoutes: Routes =[
  { path: '', component: EdtiBookComponent},
  { path: 'edit/:id', component: EdtiBookComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
