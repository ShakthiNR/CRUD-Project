import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './TodoForm/todoform.component';
import { TodoListsComponent } from './TodoLists/todolists.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
