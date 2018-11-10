import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo/model/todo.model';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, DELETE_TODO, DeleteTodoAction } from 'src/app/todo/todo.actions';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo
  @ViewChild('txtInputFisico') txtInputFisico:ElementRef;
  

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    //console.log(this.todo);
    //let´s subscribe to the observable valueChanges of chkField proper
    this.chkField.valueChanges
        .subscribe ( valor => {
          console.log( `${this.todo.texto}: ${valor}` ); //solo al principio, para ver
          const accion = new ToggleTodoAction( this.todo.id );
          this.store.dispatch( accion );
        } );
        /*
    this.txtInput.valueChanges
    .subscribe ( newText => {
      console.log( `nuevo texto: ${newText}` );
      const accion = new EditarTodoAction( newText, this.todo.id );
      this.store.dispatch( accion );
    })*/

  } 

  editar(){
    
    this.editando = true;

    setTimeout ( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
   
  }

  terminarEdicion(){
    this.editando = false;
    console.log(`termina la edición! editando: ${this.editando}`);

    if( this.txtInput.invalid ) { return; }
    if( this.txtInput.value === this.todo.texto ) { return; }

    const accion = new EditarTodoAction( this.todo.id, this.txtInput.value );
    this.store.dispatch( accion );

  }

  delete(){
    console.log(`eliminar todo: ${this.todo.texto}`);
    const accion = new DeleteTodoAction( this.todo.id );
    this.store.dispatch( accion );
  }

}
