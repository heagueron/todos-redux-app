import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from 'src/app/todo/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado: boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleMarkAll(){

    this.completado = !this.completado;

    console.log(`Mark/Unmark all todos as: ${this.completado}`);

    const accion = new ToggleAllTodoAction( this.completado );
    
    this.store.dispatch( accion );

  }

}
