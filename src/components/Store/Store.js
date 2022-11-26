import { createStore } from 'redux';

const DEFAULT_STATE = {
    count: 0,
    name: 'Anjali',
}

const createrReducer = (state = DEFAULT_STATE, action) => {
    if (action.type === 'increment') {
        return { ...state, count: state.count + action.payload.step }
    } else if (action.type === 'decrement') {
        return { ...state, count: state.count - action.payload.step }
    }
    return state;
}

const store = createStore(createrReducer);

export default store;