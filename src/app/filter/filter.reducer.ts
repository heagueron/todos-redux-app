
import * as fromFiltro from './filter.actions';

//Primero definimos el estado inicial
const estadoInicial: fromFiltro.filtrosValidos = 'All';

//Luego la función reducer
export function filtroReducer( state = estadoInicial,
                               action: fromFiltro.acciones ): fromFiltro.filtrosValidos
                               // en este caso, la función retorna un string.
{
    switch ( action.type ) {
        case fromFiltro.SET_FILTRO:
            return action.filtro;
            //los string planos pueden ser retornados

            

        default:
            return state;

    }
}