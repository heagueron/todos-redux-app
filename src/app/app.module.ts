import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ngrx
import { StoreModule } from '@ngrx/store';
//import { todoReducer } from 'src/app/todo/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from "./app.reducers";

//Forms
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodosListComponent } from './todo/todos-list/todos-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { environment } from 'src/environments/environment.prod';
import { FilterPipe } from './filter/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducers ), //Estructura del store
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//si se siguen incluyendo reducers asi:
//StoreModule.forRoot({ todos: todoReducer },), //Estructura del store
//podria crecer mucho

