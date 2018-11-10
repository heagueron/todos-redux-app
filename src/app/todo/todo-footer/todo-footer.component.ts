import { Component, OnInit } from '@angular/core';

import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from 'src/app/todo/model/todo.model';
import { BorrarAllTodoAction } from 'src/app/todo/todo.actions';
//import { SetFiltroAction } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  //Para que la lista de filtros que se presenta sea dinámica
  filtrosValidos: fromFiltro.filtrosValidos [] = ['All', 'Active', 'Completed'];
  //mejor así y no asignar tipo string para evitar errores al crear valor de la propiedad.

  //La siguiente propiedad sera util en el html:
  filtroActual: fromFiltro.filtrosValidos;

  pendientes: number;

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.contarPendientes( state.todos );
    })

  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos){
    console.log(`selected filter: ${nuevoFiltro}`);
    const accion = new fromFiltro.SetFiltroAction( nuevoFiltro );
    this.store.dispatch( accion );
  }

  contarPendientes (todos:Todo[]){
    this.pendientes = todos.filter( todo => !todo.completado ).length;
  }

  borrarCompleted(){
    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch( accion );
  }

}
