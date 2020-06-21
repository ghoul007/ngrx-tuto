import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Cat } from './cat';
import { AddCat, FetchCats } from './cat.actions';



const intialState: State = {
    cats: [
        new Cat('cat1'),
        new Cat('cat2')
    ]
};

export interface State {
    cats: Cat[]
}

// export const adapter: EntityAdapter<Cat> = createEntityAdapter<Cat>();

const _catListReducer = createReducer(intialState,

    on(FetchCats, state => {
        return { cats: state.cats }
    }),

    on(AddCat, (state, { cat }) => {

        //  state.cats.push(cat);
        // return state
        return { cats: [...state.cats, cat] }
    })
)


export function catListReducer(state, action) {
    return _catListReducer(state, action);
}


    // switch (action.type) {
    //     case FETCH_CATS:

    //         return { ...state, cats: state.cats };

    //     case ADD_CATS:

    //         return { ...state, cats: action.payload };

    //     default:
    //         return state;
    // }

// }export function catListReducer(state: State = intialState, action: catActionType) {

//     switch (action.type) {
//         case FETCH_CATS:

//             return { ...state, cats: state.cats };

//         case ADD_CATS:

//             return { ...state, cats: action.payload };

//         default:
//             return state;
//     }

// }