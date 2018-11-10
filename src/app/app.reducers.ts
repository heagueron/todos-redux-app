import { Todo } from "src/app/todo/model/todo.model";
import { ActionReducerMap } from "@ngrx/store";

import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';

import * as fromFiltroActions from './filter/filter.actions';

export interface AppState {
    todos   : Todo[];
    filtro  : fromFiltroActions.filtrosValidos;
}

//Hay que informar a la aplicación de cada state que manejara cada reducer
//(aqui todos manejado por todoreducer y filtro , filtro reducer)
//Aqui definicion de const reducers (combinación de todos los reducers de la app)
// para el app module:

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFiltro.filtroReducer 
};


