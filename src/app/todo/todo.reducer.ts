import * as fromTodo from './todo.actions';
import { Todo } from 'src/app/todo/model/todo.model';

const todo1 = new Todo( 'Ajustar update' );
const todo2 = new Todo( 'Fix the dates' );
const todo3 = new Todo( 'Ask for the payment' );


const estadoInicial: Todo[] = [todo1, todo2, todo3];

todo2.completado = true;

export function todoReducer( state = estadoInicial, 
                            action:fromTodo.Acciones ): Todo[] {

    switch ( action.type ){
        
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo( action.texto );
            //NEVER do state.push(todo)  eso mutaria el state. Hay que regresar nuevo arreglo
            return [... state, todo];

        case fromTodo.TOGGLE_TODO:
            
            return state.map( todoEdit => { //map retorna un nuevo arreglo
                if( todoEdit.id === action.id ){
                    return{ //retornamos un clon de todoEdit, hacia el nuevo arreglo
                        ...todoEdit, //esto clona 
                        completado: !todoEdit.completado //ajusto lo requerido
                    };
                } else {
                    return todoEdit; //retornamos el mismo elemento pues no hay cambio en el.
                }
            });
         //SIEMPRE HAY QUE RETORNAR NUEVOS ESTADOS, NO MUTAR LA INFORMACIÓN ANTERIOR, PUES 
         //DE LO CONTRARIO NO SE PUEDE RETORNAR AL ESTADO ANTERIOR.   
        
        case fromTodo.EDITAR_TODO:
            return state.map( todoEdit => { //map retorna un nuevo arreglo
                if( todoEdit.id === action.id ){
                    return{ //retornamos un clon de todoEdit, hacia el nuevo arreglo
                        ...todoEdit, //esto clona 
                        texto: action.texto //ajusto lo requerido
                    };
                } else {
                    return todoEdit; //retornamos el mismo elemento pues no hay cambio en el.
                }
            });

        case fromTodo.DELETE_TODO:
            
            return state.filter( todoEdit => todoEdit.id != action.id );
            //Aqui siempre hay que retornar un arreglo de todos.
        
        case fromTodo.TOGGLE_ALL_TODO:
            
            return state.map( todoEdit => {
                return {
                    ...todoEdit, //esto clona 
                    completado: action.completado
                }
            })
            //Aqui siempre hay que retornar un arreglo de todos.
        
            case fromTodo.BORRAR_ALL_TODO:
            
            return state.filter( todoEdit => !todoEdit.completado );
                

        default:
            return state;
    }
}