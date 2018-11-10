import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from 'src/app/todo/model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: string;
  constructor( private store:Store<AppState>) { }

  ngOnInit() {
    //Aqui hay que subscribirse para escuchar los cambios en el store
    // se puede subscribirse traer solo una parte del state o full como aqui
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtro= state.filtro;
      
    })

  }

}
