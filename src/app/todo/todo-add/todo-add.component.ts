import { Component, OnInit } from '@angular/core';


import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl   
  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    this.txtInput = new FormControl( '', Validators.required );
  
  }

  agregarTodo(){

    //console.log( this.txtInput.value );
    //console.log( this.txtInput.valid );
    
    if( this.txtInput.invalid) { return ;}

    // Disparamos la acción que definimos en el reducer
    //(importamos e inyectamos el Store y AppState y todo actions)

    const accion = new fromTodo.AgregarTodoAction( this.txtInput.value);
    this.store.dispatch( accion );
    
    //Vaciamos:
    this.txtInput.setValue('');

  }

}




//1.- Desarrollamos la parte de angular para capturar el todo
// ej. con formularios reactivos
// importamos el reactiveform en el app.module
// atento con la importación de formcontrol y validators