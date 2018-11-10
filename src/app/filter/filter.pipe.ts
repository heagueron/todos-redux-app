import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/todo/model/todo.model';

import * as fromFiltro from './filter.actions';


@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform( todos:Todo[], filtro: fromFiltro.filtrosValidos ): Todo[] {

    console.log(`todos: ${todos}`);
    console.log(`filtro: ${filtro}`);

    switch( filtro ){
      
      case 'Completed':
        return todos.filter( todo => todo.completado);

      case 'Active':
        return todos.filter( todo => !todo.completado);

      default:
        return todos;
        
    }
   
  }

}
