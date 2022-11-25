import { createStore } from 'redux';

const DEFAULT_STATE = {
    count: 0,
    name: 'Anjali',
}

const createrReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === 'increment') {
        console.log(state)
        return { ...state, count: state.count + 1 }
    } else if (action.type === 'decrement') {
        return { ...state, count: state.count - 1 }
    }
    return state;
}

const store = createStore(createrReducer);

export default store;