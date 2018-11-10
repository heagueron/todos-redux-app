import { Action } from "@ngrx/store";




export const SET_FILTRO = '[Filter] Set Filtro';

export type filtrosValidos = 'All' | 'Active' | 'Completed';

export class SetFiltroAction implements Action {

    readonly type = SET_FILTRO;

    constructor( public filtro: filtrosValidos ){}
    
    //el string filtro será la palabra que cooresponde al tipo de todo que se 
    //selecciona segun las opciones mostradas en el footer (All, Active, Completed)

}

export type acciones = SetFiltroAction;