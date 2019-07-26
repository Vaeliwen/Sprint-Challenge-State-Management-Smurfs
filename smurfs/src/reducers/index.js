import { createStore } from 'redux';


const initialState = () => {
    return {
        name: '',
        age: 0,
        height: '0cm'
    }
}

function reducer() {
    return {initialState}
}

export const store = createStore(reducer)