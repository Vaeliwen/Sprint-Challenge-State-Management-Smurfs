import { FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
} from '../actions/'

const initialState = {
    smurfs: [],
    err: '',
    isFetching: false,
    isAdding: false,    
    smurf: {
        name: '',
        age: 0,
        height: '0cm'
    }
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                err: ''
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                err: ''
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isAdding: true,
                smurf: {
                    ...state.smurf,
                    name: action.payload.name,
                    age: action.payload.age,
                    height: action.payload.height
                }
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isAdding: false,
                err: ''
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isAdding: false,
                err: action.payload
            }
        default:
            return state;
    }
}

